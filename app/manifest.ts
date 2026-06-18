import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "COBO Advocacia",
    short_name: "COBO",
    description: "Advocacia & Consultoria Jurídica em Uberaba/MG.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    lang: "pt-BR",
  };
}
