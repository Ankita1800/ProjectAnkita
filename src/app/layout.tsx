import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const PPEditorialNew = localFont({
  src: [
    {
      path: '../fonts/PPEditorialNew-Ultralight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/PPEditorialNew-UltralightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../fonts/PPEditorialNew-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/PPEditorialNew-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/PPEditorialNew-Ultrabold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/PPEditorialNew-UltraboldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-editorial',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ankita | Portfolio",
  description: "A Pro Coder!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${geistSans.variable} ${geistMono.variable} ${PPEditorialNew.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}