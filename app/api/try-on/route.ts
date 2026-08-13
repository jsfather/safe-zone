import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getProduct } from "@/app/lib/products";

export const runtime = "nodejs";
export const maxDuration = 300;

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const ACCEPTED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

type OpenAIImageResponse = {
  data?: Array<{ b64_json?: string }>;
  error?: { message?: string; code?: string };
};

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return Response.json(
      { code: "API_NOT_CONFIGURED", message: "Virtual try-on is not configured." },
      { status: 503 },
    );
  }

  if (!isSameOrigin(request)) {
    return Response.json({ code: "INVALID_ORIGIN" }, { status: 403 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ code: "INVALID_FORM" }, { status: 400 });
  }

  const userImage = formData.get("image");
  const productSlug = formData.get("productSlug");
  const colorId = formData.get("color");
  const fitId = formData.get("fit");
  const size = formData.get("size");

  if (
    !(userImage instanceof File) ||
    typeof productSlug !== "string" ||
    typeof colorId !== "string" ||
    typeof fitId !== "string" ||
    typeof size !== "string"
  ) {
    return Response.json({ code: "INVALID_INPUT" }, { status: 400 });
  }

  if (!ACCEPTED_TYPES.has(userImage.type) || userImage.size === 0 || userImage.size > MAX_FILE_SIZE) {
    return Response.json({ code: "INVALID_IMAGE" }, { status: 400 });
  }

  const product = getProduct(productSlug);
  const color = product?.colors.find((option) => option.id === colorId);
  const fit = product?.fits.find((option) => option.id === fitId);
  const validSize = product?.sizes.includes(size);

  if (!product || !color || !fit || !validSize) {
    return Response.json({ code: "INVALID_PRODUCT_OPTIONS" }, { status: 400 });
  }

  try {
    const garmentPath = join(process.cwd(), "public", color.image.replace(/^\//, ""));
    const garmentBytes = await readFile(garmentPath);
    const upstreamForm = new FormData();
    const model = process.env.OPENAI_IMAGE_MODEL || "gpt-image-2";

    upstreamForm.append("model", model);
    upstreamForm.append("image[]", userImage, safeFilename(userImage));
    upstreamForm.append(
      "image[]",
      new Blob([garmentBytes], { type: "image/jpeg" }),
      `${product.slug}-${color.id}.jpg`,
    );
    upstreamForm.append("prompt", buildTryOnPrompt({
      productName: product.name.en,
      kind: product.kind,
      color: color.label.en,
      fit: fit.label.en,
      size,
    }));
    upstreamForm.append("quality", "high");
    upstreamForm.append("size", "1024x1536");
    upstreamForm.append("output_format", "jpeg");
    upstreamForm.append("output_compression", "88");

    const upstream = await fetch("https://api.openai.com/v1/images/edits", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}` },
      body: upstreamForm,
      signal: AbortSignal.timeout(180_000),
      cache: "no-store",
    });

    const payload = await upstream.json() as OpenAIImageResponse;
    const encodedImage = payload.data?.[0]?.b64_json;

    if (!upstream.ok || !encodedImage) {
      const requestId = upstream.headers.get("x-request-id");
      return Response.json(
        {
          code: payload.error?.code || "IMAGE_GENERATION_FAILED",
          message: "OpenAI could not generate this fitting.",
          requestId,
        },
        { status: upstream.status >= 400 && upstream.status < 500 ? 422 : 502 },
      );
    }

    return Response.json(
      { image: `data:image/jpeg;base64,${encodedImage}` },
      { headers: { "Cache-Control": "no-store, private" } },
    );
  } catch (error) {
    const code = error instanceof DOMException && error.name === "TimeoutError"
      ? "IMAGE_GENERATION_TIMEOUT"
      : "IMAGE_GENERATION_FAILED";

    return Response.json({ code }, { status: 502 });
  }
}

function buildTryOnPrompt({
  productName,
  kind,
  color,
  fit,
  size,
}: {
  productName: string;
  kind: "top" | "bottom" | "layer";
  color: string;
  fit: string;
  size: string;
}) {
  const garmentArea = kind === "bottom"
    ? "Replace only the trousers or lower-body garment."
    : kind === "layer"
      ? "Add or replace only the outer top layer."
      : "Replace only the current upper-body top.";

  return `Create a photorealistic virtual clothing try-on.

Image 1 is the customer and the identity/pose reference. Preserve the customer's exact face, identity, hair, skin tone, body proportions, pose, hands, background, camera angle, lighting, and all visible details with very high fidelity.
Image 2 is the exact Safe Zone garment reference. Dress the customer in that exact garment: ${productName}, colour ${color}, selected fit ${fit}, selected size ${size}. Preserve its colour, fabric texture, seams, cut, sleeve and hem proportions.

${garmentArea} Keep every unrelated garment and accessory from Image 1 unchanged. Make the new garment follow the customer's real body, perspective, folds, shadows, occlusion, and lighting naturally. The result must look like a real fitting-room photograph, not a fashion illustration.

Do not change the person's body shape, gender presentation, age, face, expression, or background. Do not add text, logos, extra people, accessories, watermarks, or branding that is not visible on the garment reference.`;
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return true;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function safeFilename(file: File) {
  const extension = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
  return `customer.${extension}`;
}
