"use client"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const variants = {
  small: { scale: 0.7, y: 0, borderRadius: "60px" },
  big: {
    scale: 1,
    y: 50,
    borderRadius: "0px",
  },
};

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });

  return (
    <motion.div
      animate={inView ? "big" : "small"}
      variants={variants}
      transition={{ duration: 2, ease: "easeOut" }}
      ref={ref}
      className="services p-6 md:p-24 mb-6 md:mb-24"
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
            Let`s craft some cutting-edge mobile apps that`ll dazzle your users
            and make competitors green with envy!
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
            I`m here to build stunning websites that not only look amazing but
            also turn clicks into customers with flair and finesse
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
            Get ready to launch your online stores that optimize user experience
            and maximize sales for your business.
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
            Let`s jazz up your brand with designs that pop like confetti! I`ll
            sprinkle some creativity and color to make sure you stand out from
            the crowd.
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
            ranks! With my ninja SEO skills, we`ll make sure your website shines
            brighter than a disco ball.
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
  );
};

export default Services;