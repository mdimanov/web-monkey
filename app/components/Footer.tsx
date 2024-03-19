import Image from "next/image";
import Link from "next/link";
import SocialNetworks from "../components/SocialNetworks";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto md:mt-20 mt-5 md:py-20 py-10 px-6">
        <div className="flex md:flex-row flex-col my-10 md:my-20">
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              <strong>Have an idea?</strong> <br />
              <span className="font-light">Let’s build it toghether!</span>
            </h2>
          </div>
          <div className="mail-container flex relative justify-center items-center w-1/2 py-4 md:py-8">
            <Image
              src="/assets/images/text-circle.png"
              width="220"
              height="220"
              alt="Come say hi"
              className="rotate absolute "
            />
            <div
              className="mail cursor-pointer absolute rounded-full  p-4 md:p-8"
              style={{
                boxShadow:
                  "0 1.0077627319085878px 2.6201831029623284px -0.3125px #00000040, 0 2.3885756205709185px 6.210296613484388px -0.625px #00000040, 0 4.357008827588287px 11.328222951729547px -0.9375px #00000040, 0 7.2435184293135535px 18.83314791621524px -1.25px #00000040, 0 11.697691633173964px 30.413998246252305px -1.5625px #00000040, 0 19.147960564453385px 49.7846974675788px -1.875px #00000040, 0 32.97149505802081px 85.7258871508541px -2.1875px #00000040, 0 60px 156px -2.5px #00000040, 0 0 120px 40px #124cf240",
              }}
            >
              <Link href="/contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="url(#gradient)"
                  className="mail-icon md:w-20 md:h-20 w-12 h-12"
                >
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "rgb(0, 61, 136)" }}
                      />
                      <stop
                        offset="25%"
                        style={{ stopColor: "rgb(15, 161, 218)" }}
                      />
                      <stop
                        offset="50%"
                        style={{ stopColor: "rgb(30, 220, 224)" }}
                      />
                      <stop
                        offset="75%"
                        style={{ stopColor: "rgb(25, 230, 223)" }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "rgb(9, 226, 157)" }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:pt-20 pt-5">
          <div className="flex items-center w-1/2">
            <span className="text-md font-light tracking-tight text-white sm:text-xl">
              © All Rights Reserved
            </span>
          </div>
          <div className="flex justify-end items-center w-1/2">
            <SocialNetworks color="white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
