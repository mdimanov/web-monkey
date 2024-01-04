import Header from "../components/Header";
import MobileNavigation from "../components/MobileNavigation";
import BlurWrapper from "../components/BlurWrapper";
import SVGDots from "../components/SVGDots";

export default function Projects() {
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
                    some of my great
                  </span>
                  <h1 className="text-4xl pb-4 md:pb-0 font-black tracking-tight text-white sm:text-6xl">
                    Projects
                  </h1>
                </div>
                <div className="md:w-3/5 md:px-4 px-0">
                  <p className="md:text-2xl sm:leading-8 text-lg pb-6 leading-6 text-slate-100">
                    Behind each project lies a unique story, weaving tales of{" "}
                    <strong>creativity</strong>, <strong>dedication</strong>,
                    and <strong>excellence</strong>. 🤝 Join me in exploring the
                    extraordinary narratives behind my work - stories of
                    innovation, passion, and the seamless integration of ideas
                    💡 into remarkable digital experiences. 💻
                  </p>
                  <p className="pb-6 text-slate-500">
                    Welcome to a world where every project is a unique
                    adventure, and every collaboration unfolds a new chapter of
                    success — a success in which you could be a part of it.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="absolute top-40 -left-40 -z-10 transform-gpu overflow-hidden sm:left-80 sm:top-40"
              aria-hidden="true"
            >
              <SVGDots ColorValueHex="#818CF8" />
            </div>
          </div>
        </div>
      </BlurWrapper>
      <MobileNavigation />
    </>
  );
}
