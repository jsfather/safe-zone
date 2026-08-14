import Image from "next/image";
import type { CSSProperties } from "react";

type ProductRenderProps = {
  src: string;
  alt: string;
  color: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

type ProductRenderStyle = CSSProperties & {
  "--product-color": string;
  "--product-mask": string;
};

export function ProductRender({
  src,
  alt,
  color,
  sizes,
  priority = false,
  className = "",
}: ProductRenderProps) {
  const style: ProductRenderStyle = {
    "--product-color": color,
    "--product-mask": `url("${src}")`,
  };

  return (
    <div className={`product-render ${className}`} style={style}>
      <span aria-hidden="true" className="product-render__color" />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="product-render__texture object-contain"
      />
    </div>
  );
}
