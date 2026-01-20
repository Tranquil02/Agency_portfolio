import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://mauryanstudio.online"),

  title: {
    default: "Mauryan Studio | Premium Digital Agency",
    template: "%s | Mauryan Studio",
  },

  description:
    "Mauryan Studio is a premium digital agency delivering scalable web development, branding, and UI/UX solutions for modern businesses.",

  keywords: [
    "Mauryan Studio",
    "digital agency",
    "web development agency",
    "branding agency",
    "UI UX design",
    "startup agency",
    "premium digital services",
  ],

  authors: [{ name: "Mauryan Studio" }],
  creator: "Mauryan Studio",
  publisher: "Mauryan Studio",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://mauryanstudio.online",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Mauryan Studio | Premium Digital Agency",
    description:
      "We build high-performance digital products, brands, and scalable digital solutions.",
    url: "https://mauryanstudio.online",
    siteName: "Mauryan Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mauryan Studio - Premium Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mauryan Studio | Premium Digital Agency",
    description:
      "Premium digital agency delivering scalable web, branding, and UI/UX solutions.",
    images: ["/og-image.png"],
    creator: "@mauryanstudio",
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-white overflow-x-hidden antialiased">
        <Toaster richColors position="top-right" />
        {children}
      </body>
    </html>
  );
}
