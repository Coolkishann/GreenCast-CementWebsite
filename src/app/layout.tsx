import type { Metadata } from "next";
import "./globals.css";
import ScrollProvider from "@/components/ScrollProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GREEN CAST | Redefining Architectural Purity",
  description: "Crafting the foundation of sustainable modernism with ultra-high purity white cement solutions for structural stability and architectural serenity.",
  keywords: "white cement, premium cement, sustainable concrete, architectural concrete, Green Cast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Syne:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-background text-on-surface">
        <ScrollProvider>
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
