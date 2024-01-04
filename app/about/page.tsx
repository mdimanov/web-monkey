import Header from "../components/Header";
import MobileNavigation from "../components/MobileNavigation";
import BlurWrapper from "../components/BlurWrapper";
import Link from "next/link";
import SVGDots from "../components/SVGDots";

export default function About() {
  return (
    <>
      <BlurWrapper>
        <div className="bg-about-content">
          <Header />
          <div className="relative isolate px-6 pt-14 overflow-hidden lg:px-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row py-20 sm:py-28 lg:py-36">
                <div className="md:w-2/5 md:px-4 px-0">
                  <span className="uppercase font-light text-emerald-400">
                    what`s important
                  </span>
                  <h1 className="text-4xl pb-4 md:pb-0 font-black tracking-tight text-white sm:text-6xl">
                    About me
                  </h1>
                </div>
                <div className="md:w-3/5 md:px-4 px-0">
                  <p className="md:text-2xl sm:leading-8 text-lg pb-6 leading-6 text-slate-100">
                    From the begging of my journey in{" "}
                    <strong>web development</strong>, I`ve been on a mission 🚀
                    to craft{" "}
                    <Link
                      href="/services"
                      className="hover:text-emerald-400 text-emerald-500"
                    >
                      {" "}
                      exceptional solutions
                    </Link>{" "}
                    that resonate with businesses, creating brands and digital
                    products that leave a lasting impression ✨.
                  </p>
                  <p className="pb-6 text-slate-500">
                    I love creating astonishing websites and{" "}
                    <Link
                      href="/services"
                      className="hover:text-emerald-400 text-emerald-500"
                    >
                      mobile apps
                    </Link>
                    . Passion fuels my work, and I`m all in for the success of
                    each project I undertake. I don`t just make things. I craft
                    experiences, and I`m pretty awesome at it. Join me on this
                    journey where every project is a puzzle waiting to be solved
                    with creativity and expertise.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="absolute top-40 -left-40 -z-10 transform-gpu overflow-hidden sm:left-20 sm:top-80"
              aria-hidden="true"
            >
              <SVGDots ColorValueHex="#10b981" />
            </div>
          </div>
        </div>
      </BlurWrapper>
      <MobileNavigation />
    </>
  );
}
