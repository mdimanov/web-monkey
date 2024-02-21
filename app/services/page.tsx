import Header from "../components/Header";
import MobileNavigation from "../components/MobileNavigation";
import BlurWrapper from "../components/BlurWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Hello, Services",
};

export default function Services() {
  return (
    <>
      <BlurWrapper>
        <div className="bg-about-content">
          <Header />
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row py-20 sm:py-28 lg:py-36">
                <div className="md:w-2/5 md:px-4 px-0">
                  <h1 className="text-4xl pb-4 md:pb-0 font-black tracking-tight text-white sm:text-6xl">
                    Here`s what I can do for you 💻
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurWrapper>
      <MobileNavigation />
    </>
  );
}
