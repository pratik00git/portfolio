import { ImageResponse } from "next/og";
import { BrandMark, brandFonts } from "./brand-mark";

// PNG fallback for browsers and crawlers that don't use the SVG icon
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(<BrandMark size={192} radius={48} />, { ...size, fonts: await brandFonts() });
}
