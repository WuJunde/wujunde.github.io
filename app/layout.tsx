import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wujunde.github.io"),
  title: "Junde Wu",
  description: "AI Researcher, PhD @Oxford",
  openGraph: {
    title: "Junde Wu",
    description: "AI Researcher, PhD @Oxford, Prev. Sr. Scientist @Baidu, Tech Leader @SenseTime",
    url: "https://wujunde.github.io",
    siteName: "Junde Wu",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junde Wu",
    description: "AI Researcher, PhD @Oxford. Sharing what I read, write, and compute.",
    creator: "@JundeWu",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" style={{ scrollBehavior: "smooth" }}>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
