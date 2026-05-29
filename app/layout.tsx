import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const fallbackSiteUrl = "https://nyxstudioseg.com";

function getMetadataBase() {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl);
  } catch {
    return new URL(fallbackSiteUrl);
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "NYX Studio | Creative Systems Built For Attention",
    template: "%s | NYX Studio",
  },
  description:
    "NYX Studio is a creative digital marketing agency helping brands grow through media buying, AI visuals, web development, automation, and strategic growth systems.",
  applicationName: "NYX Studio",
  manifest: "/manifest.webmanifest",
  category: "marketing",
  keywords: [
    "NYX Studio",
    "creative marketing agency",
    "media buying",
    "AI creative direction",
    "web development",
    "AI automation",
    "brand strategy",
    "Cairo digital agency",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "NYX Studio",
    title: "NYX Studio | Creative Systems Built For Attention",
    description:
      "NYX Studio helps brands grow through paid ads, AI visuals, websites, and automation.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NYX Studio brand preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYX Studio | Creative Systems Built For Attention",
    description:
      "Creative marketing studio built for attention, performance, and scalable growth systems.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#050507" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
