import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useParallax } from "react-scroll-parallax";

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

const texts = {
  namel: "Remus",
  namer: "Brz",
};

const Hero = () => {
  const parallax =
    useParallax <
    HTMLDivElement >
    {
      easing: "easeOutQuad",
      translateX: [0, 100],
    };
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const ref1 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition1(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      data-color="#000000"
      data-textcolor="#FFFFFF"
      data-colordark="#FFFFFF"
      data-textcolordark="#ff0000"
      data-text="Scroll Down"
      className="relative flex w-screen flex-col font-didact lg:justify-start"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        exit={{ opacity: 0 }}
        transition={{ ...transition }}
        className="scale-150"
      >
        <img
          className="imageanim absolute right-[17%] -bottom-[35rem] z-10"
          src="https://uploads-ssl.webflow.com/5fa25266badbdb239c79ef86/60b186c0b5dadaad7d66fde0_webflow%20-%20shape%201.png"
          alt=""
        />
      </motion.div>
      <div className="custom-padding z-20 flex flex-col justify-end pt-64 md:flex-row md:justify-between md:pt-72 lg:h-screen lg:pt-80">
        <div className="title-dark-mode flex flex-col justify-end text-[6.5rem] font-medium leading-[6rem] tracking-tight md:text-[12rem] md:leading-[11rem] 2xl:w-2/3 2xl:text-[20rem] 2xl:leading-[18rem]">
          <div
            ref={ref1}
            style={{
              transform: `translateX(-${scrollPosition1 / 2.5}px)`,
            }}
          >
            <div className="flex overflow-hidden">
              {texts.namel.split("").map((word, idx) => (
                <motion.div
                  key={word}
                  initial={{ x: -600 }}
                  animate={{ x: 0 }}
                  exit={{ x: -600 }}
                  transition={{ ...transition, delay: idx / 100 }}
                >
                  {word}
                </motion.div>
              ))}
            </div>
          </div>
          <div
            ref={ref1}
            style={{
              transform: `translateX(${scrollPosition1 / 2.5}px)`,
            }}
          >
            <div className="flex overflow-hidden ">
              {texts.namer.split("").map((word, idx) => (
                <motion.div
                  key={word}
                  initial={{ x: 1300 }}
                  animate={{ x: 0 }}
                  exit={{ x: 1300 }}
                  transition={{ ...transition, delay: idx / 100 }}
                >
                  {word}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 flex items-end justify-end 2xl:w-1/3">
          <motion.button
            onClick={() =>
              window.scrollBy({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
            initial={{ y: 90 }}
            animate={{ y: 0 }}
            exit={{ y: 90 }}
            transition={{ ...transition }}
            className="w-20"
          >
            <div className="scrolldown overflow-hidden">
              <ArrowDownCircleIcon className="stroke-dark" />
            </div>
          </motion.button>
        </div>
      </div>
    </a>
  );
};

export default Hero;
