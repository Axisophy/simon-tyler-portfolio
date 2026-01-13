import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://simontyler.co.uk";
const GA_ID = "G-S9ESZ0J894";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Simon Tyler | Designer, Illustrator, Author",
    template: "%s | Simon Tyler"
  },
  description: "Simon Tyler is a designer, illustrator, and author working across data visualisation, product design, and infographics. Portfolio featuring Network Rail pictograms, Mxwll, Elxsis, and more.",
  authors: [{ name: "Simon Tyler" }],
  creator: "Simon Tyler",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Simon Tyler",
    title: "Simon Tyler | Designer, Illustrator, Author",
    description: "Simon Tyler is a designer, illustrator, and author working across data visualisation, product design, and infographics.",
    images: [
      {
        url: "/images/maxwell/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Simon Tyler Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Tyler | Designer, Illustrator, Author",
    description: "Simon Tyler is a designer, illustrator, and author working across data visualisation, product design, and infographics.",
    images: ["/images/maxwell/hero.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
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
        <link rel="canonical" href={siteUrl} />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
