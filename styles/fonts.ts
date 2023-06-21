import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const cal = localFont({
  src: "./LXGWWenKai-Regular-.woff2",
  variable: "--font-cal",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
