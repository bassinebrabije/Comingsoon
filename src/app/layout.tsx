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
  title: "Slashr - Award-winning HR system for all your HRIS needs",
  description:
    "Slashr is the best HR system to manage all your HRIS needs, including payroll, employee records, and performance tracking.",
  keywords: [
    "HR software",
    "HRIS system",
    "payroll management",
    "employee records",
    "HR management",
  ],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Slashr - Award-winning HR System",
    description: "All-in-one HRIS software for efficient workforce management.",
    url: "https://www.slashrtalent.com",
    siteName: "Slashr",
    images: [
      {
        url: "https://i.imghippo.com/files/vRLw1789Enw.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slashr - Award-winning HR System",
    description: "All-in-one HRIS software for efficient workforce management.",
    images: ["https://i.imghippo.com/files/vRLw1789Enw.png"],
  },
  metadataBase: new URL("https://www.slashrtalent.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for Google Fonts performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Fallback favicon link */}
        <link rel="icon" href="/favicon.ico" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.slashrtalent.com" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
