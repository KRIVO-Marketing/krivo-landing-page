import { preload } from "react-dom";
import { GoogleTag } from "@/components/shared/GoogleTag";
import { organizationJsonLd, siteMetadata } from "@/lib/seo";
import "@/styles/globals.css";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  preload("/fonts/albert-sans-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  preload("/fonts/lexend-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });

  return (
    <html lang="pt-BR">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </head>
      <body>
        <GoogleTag />
        {children}
      </body>
    </html>
  );
}
