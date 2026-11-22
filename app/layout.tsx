import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leonardo Web Services | Diseño y desarrollo web",
  description:
    "Diseño y desarrollo de sitios web, sistemas a medida y soluciones digitales para marcas y negocios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
