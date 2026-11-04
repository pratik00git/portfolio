// Loads Plus Jakarta Sans for next/og images (its built-in font has no bold weight).
// Falls back to the default font if Google Fonts can't be reached at build time.
export async function brandFonts() {
  const load = async (weight: number) => {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@${weight}`)).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) throw new Error("font url not found");
    return { name: "Jakarta", data: await (await fetch(url)).arrayBuffer(), weight: weight as 500 | 800, style: "normal" as const };
  };
  try {
    return await Promise.all([load(500), load(800)]);
  } catch {
    return undefined;
  }
}

export const brandGradient = "linear-gradient(135deg, #5d6cc4 0%, #c9785a 100%)";

// Shared "PT" mark rendered by next/og for the PNG icons and social preview image.
export function BrandMark({ size, radius }: { size: number; radius: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: brandGradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        fontFamily: "Jakarta",
        fontSize: size * 0.46,
        fontWeight: 800,
        letterSpacing: -size * 0.02,
      }}
    >
      PT
    </div>
  );
}
