import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import clsx from "clsx";
import Layout from "@/components/layout/layout";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty Character Explorer",
  description:
    "Explore characters from Rick and Morty with filtering capabilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "antialiased bg-zinc-900 text-zinc-300"
        )}
      >
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
