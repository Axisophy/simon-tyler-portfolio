import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simon Tyler - Designer, Author, Systems Thinker",
  description: "Portfolio of Simon Tyler, designer working at the intersection of digital product, data visualisation, and design systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ugw5cvo.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
