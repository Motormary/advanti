import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const reckless = localFont({
  variable: "--font-reckless",
  src: "./fonts/RecklessNeue-Regular.ttf",
});

export const metadata: Metadata = {
  title: {
    default: "Advanti &Partners",
    template: "Advanti &Partners | %s",
  },
  description: "Din lokale eiendomsmegler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${reckless.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
