import Link from "next/link";
import Header from "./components/Header";
import ScrollIcon from "./components/ScrollIcon";
import ButtonArrow from "./components/ButtonArrow";
import MobileNavigation from "./components/MobileNavigation";
import BlurWrapper from "./components/BlurWrapper";
import LatestProjects from "./components/LatestProjects";
import TechnologiesLogos from "./components/TechnologiesLogos";

export default function Home() {
  return (
    <>
      <BlurWrapper>
        <div className="bg-home-content backdrop-blur-sm min-h-screen">
          <Header />
          <div className="bg-home-content-gradient relative overflow-hidden isolate px-6 pt-14 lg:px-8">
            <div className="bg-home-black-gradiednt"></div>
            <div className="bg-home-corner-black-container">
              <div className="bg-home-corner-black"></div>
            </div>
            <div className="relative z-10 mx-auto max-w-4xl py-16 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
                  Bringing Ideas to Life. Where Creativity Meets Code!
                </h1>
                <p className="mt-6 md:text-lg md:leading-8 text-slate-200	">
                  Hello, I`m Miro, a passionate{" "}
                  <strong>front-end developer</strong> on a mission to turn
                  dreams into interactive realities. I`m here to sprinkle a bit
                  of magic on the web. Explore my portfolio, and let`s turn your
                  digital dreams into a coding symphony! 💻🎵{" "}
                  <strong>#CodingWithAMagic</strong>{" "}
                  <strong>#PixelPerfectionist</strong>
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="#wm-projects"
                    className="rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Recent projects
                  </Link>
                  <Link
                    href="/about"
                    scroll={false}
                    className="text-sm font-semibold leading-6 text-white hover:text-emerald-400"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
            <ScrollIcon />
          </div>
        </div>
        <section id="wm-projects">
          <div className="container mx-auto md:py-20 md:my-20 my-5 py-5 px-6">
            <div className="flex flex-col w-auto py-10 md:w-3/5 md:gap-y-10 gap-y-5">
              <span className="text-emerald-400 text-2xl font-extralight">
                Recent projects
              </span>
              <h2 className="text-xl font-black tracking-tight text-white md:text-4xl">
                Your work is going to fill a large part of your life.{" "}
                <span className="opacity-50">
                  And the only way to be truly satisfied is to do what you
                  believe is great work
                </span>
              </h2>
              <ButtonArrow text="See all projects" link="/projects" />
            </div>
            <LatestProjects />
          </div>
        </section>
        <section id="wm-technologies">
          <div className="container mx-auto px-6">
            <TechnologiesLogos />
            <div className="flex w-auto mt-10 mx-auto md:w-2/5">
              <h3 className="text-md text-center tracking-tight text-white md:text-2xl">
                Embracing innovation with a heart full of passion — these are
                the technologies I love using. ❤️
              </h3>
            </div>
          </div>
        </section>
        <footer>
          <div className="container mx-auto px-6">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </footer>
      </BlurWrapper>
      <MobileNavigation />
    </>
  );
}
