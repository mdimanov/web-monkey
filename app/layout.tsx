import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageLayout from "./components/PageLayout";
import { BlurProvider } from "./components/BlurContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webmonkey - Bringing Ideas to Life. Where Creativity Meets Code",
  description:
    "Hello, I`m Miro, a passionate front-end developer on a mission to turn dreams into interactive realities.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className}>
        <PageLayout>
          <BlurProvider>{children}</BlurProvider>
        </PageLayout>
      </body>
    </html>
  );
}
