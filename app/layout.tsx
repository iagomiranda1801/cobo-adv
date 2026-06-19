import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

const title = "COBO Advocacia | Advogado em Uberaba/MG";
const description =
  "COBO Advocacia em Uberaba/MG. Atendimento jurídico profissional, ético e estratégico em Direito Civil, Penal, Trabalhista, Previdenciário e do Consumidor.";

export const metadata: Metadata = {
  metadataBase: new URL("https://coboadvocacia.com.br"),
  title,
  description,
  keywords: [
    "advogado em Uberaba",
    "advocacia Uberaba",
    "escritório de advocacia Uberaba",
    "advogado civil Uberaba",
    "advogado penal Uberaba",
    "advogado criminalista Uberaba",
    "advogado trabalhista Uberaba",
    "consultoria jurídica Uberaba",
  ],
  authors: [{ name: "COBO Advocacia" }],
  creator: "COBO Advocacia",
  applicationName: "COBO Advocacia",
  category: "Legal Services",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "COBO Advocacia",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>
        {children}
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
