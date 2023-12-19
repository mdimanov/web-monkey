"use client";
import useMobileMenu from "./hooks/useMobileMenu";
import Header from "./components/Header";
import ScrollIcon from "./components/ScrollIcon";
import MobileMenu from "./components/MobileMenu";
import MobileMenuButton from "./components/MobileMenuButton";

export default function Home() {
  const { mobileMenuOpen, setMobileMenuOpen, blurWrapperRef } = useMobileMenu();

  return (
    <>
      <div ref={blurWrapperRef} className="bg-white bg-home-wrap">
        <div className="bg-home-content backdrop-blur-sm min-h-screen">
          <Header setMobileMenuOpen={setMobileMenuOpen} />
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#23bbe4] to-[#14e6cd] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Bringing Ideas to Life. Creativity Meets Code!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Hello, I`m Miro, a passionate{" "}
                  <strong>front-end developer</strong> on a mission to turn
                  dreams into interactive realities. I`m here to sprinkle a bit
                  of magic on the web. Explore my portfolio, and let`s turn your
                  digital dreams into a coding symphony! 🎨💻
                  <strong>#CodingWithAMagic</strong>{" "}
                  <strong>#PixelPerfectionist</strong>
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-emerald-400"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <ScrollIcon />
          </div>
        </div>
      </div>
      <MobileMenuButton setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
    </>
  );
}
