"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNavigation";
import BlurWrapper from "../components/BlurWrapper";
import BlobAnimatedBackground from "../components/BlobAnimatedBackground";
import Image from "next/image";
// import type { Metadata } from "next";
import AnimatedAboutImage from "../components/AnimatedAboutImage";

const variants = {
  small: { scale: 0.7, y: 0, borderRadius: "60px" },
  big: {
    scale: 1,
    y: 50,
    borderRadius: "0px",
  },
};

// export const metadata: Metadata = {
//   title: "Projects",
//   description: "Behind each project lies a 🌟 unique story",
// };

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });
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
          <motion.div
            animate={inView ? "big" : "small"}
            variants={variants}
            transition={{ duration: 2, ease: "easeOut" }}
            ref={ref}
            className="services p-6 md:p-24"
          >
            <div className="container mx-auto px-4">
              <div className="services-grid">
                <div className="services-item">
                  <Image
                    src="/assets/images/mobile-app-icon.png"
                    width="120"
                    height="120"
                    alt="mobile app"
                  />
                  <h3 className="text-2xl pt-6 pb-4 md:pt-12 md:pb-6 font-black">
                    Mobile Application
                  </h3>
                  Let`s craft some cutting-edge mobile apps that`ll dazzle your
                  users and make competitors green with envy!
                </div>
                <div className="services-item">
                  <Image
                    src="/assets/images/e-commerce-website-icon.png"
                    width="120"
                    height="120"
                    alt="mobile app"
                  />
                  <h3 className="text-2xl pt-6 pb-4 md:pt-12 md:pb-6 font-black">
                    Website Development
                  </h3>
                  I`m here to build stunning websites that not only look amazing
                  but also turn clicks into customers with flair and finesse
                </div>
                <div className="services-item">
                  <Image
                    src="/assets/images/e-commerce-icon.png"
                    width="120"
                    height="120"
                    alt="mobile app"
                  />
                  <h3 className="text-2xl pt-6 pb-4 md:pt-12 md:pb-6 font-black">
                    E-commerce
                  </h3>
                  Get ready to launch your online stores that optimize user
                  experience and maximize sales for your business.
                </div>
                <div className="services-item">
                  <Image
                    src="/assets/images/design-icon.png"
                    width="120"
                    height="120"
                    alt="mobile app"
                  />
                  <h3 className="text-2xl pt-6 pb-4 md:pt-12 md:pb-6 font-black">
                    Design & Branding
                  </h3>
                  Let`s jazz up your brand with designs that pop like confetti!
                  I`ll sprinkle some creativity and color to make sure you stand
                  out from the crowd.
                </div>
                <div className="services-item">
                  <Image
                    src="/assets/images/seo-friendly-icon.png"
                    width="120"
                    height="120"
                    alt="mobile app"
                  />
                  <h3 className="text-2xl pt-6 pb-4 md:pt-12 md:pb-6 font-black">
                    SEO Optimization
                  </h3>
                  Time to boost your online presence and climb the search engine
                  ranks! With my ninja SEO skills, we`ll make sure your website
                  shines brighter than a disco ball.
                </div>
                <div className="services-item">
                  <Image
                    src="/assets/images/support-icon.png"
                    width="120"
                    height="120"
                    alt="mobile app"
                  />
                  <h3 className="text-2xl pt-6 pb-4 md:pt-12 md:pb-6 font-black">
                    Support
                  </h3>
                  Need a digital superhero? Look no further! I`m here to provide
                  reliable support and save the day whenever you need it.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <Footer />
      </BlurWrapper>
      <MobileNavigation />
    </>
  );
}
