import { ImageResponse } from "next/og";
import { BrandMark, brandFonts } from "./brand-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS adds its own rounded corners, so the mark fills the square
export default async function AppleIcon() {
  return new ImageResponse(<BrandMark size={180} radius={0} />, { ...size, fonts: await brandFonts() });
}
