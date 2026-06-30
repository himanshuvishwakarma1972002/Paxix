import type { Metadata } from "next";
import "@/index.css";

export const metadata: Metadata = {
  title: "PAIX",
  description: "PAIX website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
