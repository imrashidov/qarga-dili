import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qarğa Dili Generator",
  description:
    "Qarğa dili kodlaşdırılmış və ya şifrəli danışıq üsuludur. Bu dilin əsas məqsədi sözləri elə dəyişməkdir ki, yalnız onu bilən şəxslər anlaya bilsin.",
  metadataBase: new URL("https://qargadili.vercel.app"),
  keywords: ["Qarğa dili", "Azərbaycan", "dil oyunu", "generator", "əyləncə"],
  authors: [{ name: "Farid Rashidov", url: "https://github.com/imrashidov" }],
  creator: "Farid Rashidov",
  publisher: "Farid Rashidov",
  alternates: {
    canonical: "https://qargadili.vercel.app",
  },
  applicationName: "Qarğa Dili Generator",
  appleWebApp: {
    capable: true,
    title: "Qarğa Dili",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    type: "website",
    locale: "az_AZ",
    url: "https://qargadili.vercel.app",
    title: "Qarğa Dili Generator",
    description:
      "Qarğa dili kodlaşdırılmış və ya şifrəli danışıq üsuludur. Bu dilin əsas məqsədi sözləri elə dəyişməkdir ki, yalnız onu bilən şəxslər anlaya bilsin.",
    siteName: "Qarğa Dili Generator",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Qarğa Dili Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qarğa Dili Generator",
    description:
      "Qarğa dili kodlaşdırılmış və ya şifrəli danışıq üsuludur. Bu dilin əsas məqsədi sözləri elə dəyişməkdir ki, yalnız onu bilən şəxslər anlaya bilsin.",
    images: ["/images/og-image.png"],
    creator: "@imrashidov",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "google-site-verification": process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <head>
        <meta name="theme-color" content="#4F46E5" />
        <meta name="apple-mobile-web-app-title" content="Qarğa Dili" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Qarğa Dili" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#4F46E5" />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-15H6VFSV48"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-15H6VFSV48');
          `}
        </Script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
