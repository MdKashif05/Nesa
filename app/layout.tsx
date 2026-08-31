import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "NESA | Let's Speak in English – Premier English Institute",
    template: "%s | NESA English",
  },
  description:
    "NESA is a premier English speaking institute. Join Spoken English, IELTS, Business English, and Public Speaking courses. Transform your communication skills today.",
  keywords: [
    "english speaking course",
    "IELTS training",
    "spoken english classes",
    "NESA english",
    "english institute",
    "business english",
    "public speaking",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
