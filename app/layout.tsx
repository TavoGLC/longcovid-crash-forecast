import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'long-COVID activity forecast',
  description: 'Forecasting long COVID crashes and activity',
  openGraph: {
    title: 'Forecasting long COVID crashes and activity',
    description: 'Forecasting long COVID crashes and activity',
    url: 'https://tlahui.vercel.app/',
    siteName: 'long-COVID activity forecast',
    images: [
      {
        url: 'https://tlahui.vercel.app/social-media-image.jpg', // Must be an absolute URL
        width: 640,
        height: 427,
      }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forecasting long COVID crashes and activity',
    description: 'Forecasting long COVID crashes and activity',
    images: [{
      url: 'https://tlahui.vercel.app/social-media-image.jpg', // Must be an absolute URL
      width: 640,
      height: 427,
    }]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-[#020202]" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
