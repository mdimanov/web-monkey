
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNavigation";
import BlurWrapper from "../components/BlurWrapper";
import BlobAnimatedBackground from "../components/BlobAnimatedBackground";
import Services from "../components/Services";

import type { Metadata } from "next";
import AnimatedAboutImage from "../components/AnimatedAboutImage";

export const metadata: Metadata = {
  title: "About",
  description: "Hello, I`m Miro, a passionate front-end developer on a mission to turn dreams into interactive realities.",
};

export default function About() {

  return (
    <>
      <BlurWrapper>
        <div className="bg-about-content">
          <Header />
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <BlobAnimatedBackground />
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row py-20 sm:py-28 lg:py-36">
                <div className="md:w-2/5 md:px-4 px-0">
                  <h1 className="text-4xl pb-4 md:pb-0 relative font-black tracking-tight text-white sm:text-6xl z-10">
                    Helping brands for digital growth and 🏆 success
                  </h1>
                  <p className="md:mt-12 mt-4 md:text-2xl text-lg">
                    From the begging of my journey in web development, I`ve been
                    on a mission 🚀 to craft exceptional solutions that resonate
                    with businesses.
                  </p>
                  <p className="md:mt-12 mt-4 opacity-60">
                    Outside of the digital world, you can often find me spending
                    quality time with my family amidst the beauty of nature 🌲.
                    My love for adventure leads me to indulge in hobbies like
                    trail running 🏃‍♂️, snowboarding 🏂 and footbal ⚽, where I
                    find solace and rejuvenation in the great outdoors.
                  </p>
                </div>
                <div className="md:w-3/5 md:px-24 px-0">
                  <AnimatedAboutImage />
                </div>
              </div>
              <div className="flex w-auto my-10 mx-auto md:w-2/5">
                <h3 className="text-md text-center tracking-tight text-white md:text-2xl">
                  From coding sorcery ✨ to design mastery 🎨, I`m here to bring
                  your digital dreams to life. So, buckle up and check what I`m
                  good at
                  <span className="animate-pulse">...</span>
                </h3>
              </div>
            </div>
          </div>
          <Services />
        </div>
        <Footer />
      </BlurWrapper>
      <MobileNavigation />
    </>
  );
}
