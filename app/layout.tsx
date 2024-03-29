import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import PageLayout from "./components/PageLayout";
import { BlurProvider } from "./components/BlurContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webmonkey - Bringing Ideas to Life. Where Creativity Meets Code",
  description:
    "Hello, I`m Miro, a passionate front-end developer on a mission to turn dreams into interactive realities.",
  metadataBase: new URL("https://webmonkey.bg/"),
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
          <Toaster position="top-center" toastOptions={{ duration: 8000 }} />
          <BlurProvider>{children}</BlurProvider>
        </PageLayout>
      </body>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID || ""}
      />
    </html>
  );
}
