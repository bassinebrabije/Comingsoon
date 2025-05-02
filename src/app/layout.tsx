import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Load Google Font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Metadata for SEO and favicon
export const metadata: Metadata = {
  title: "SlasHr Talent",
  description: "All-in-one HRIS software for efficient workforce management",
  icons: {
    icon: "/favicon.ico",
  },
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fallback favicon link */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
