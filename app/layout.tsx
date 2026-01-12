import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simon Tyler — Designer, Author, Systems Thinker",
  description: "Portfolio of Simon Tyler, designer working at the intersection of digital product, data visualization, and design systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
