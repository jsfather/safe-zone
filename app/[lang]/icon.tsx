import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f2ede3",
          border: "4px solid #171713",
          borderRadius: "50%",
          color: "#171713",
          fontFamily: "Arial",
          fontSize: 25,
          fontWeight: 800,
          letterSpacing: -6,
          paddingRight: 5,
        }}
      >
        SZ
        <span
          style={{
            position: "absolute",
            width: 14,
            height: 14,
            top: -1,
            right: 3,
            borderRadius: "50%",
            background: "#f25a2b",
            border: "2px solid #f2ede3",
          }}
        />
      </div>
    ),
    size,
  );
}
