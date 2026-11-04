import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/Pratik-Thakkar-Resume.pdf`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
