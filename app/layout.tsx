import type { Metadata } from "next";
import { Lato } from "next/font/google";
import {Provider} from "@/components/ui/provider";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const lato= Lato({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Style Genie",
  description: "Get AI Powered Style Recs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${lato.className} antialiased`}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
