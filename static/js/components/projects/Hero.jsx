import React from "react";
import { motion } from "framer-motion";
import ScrollImage from "../blocks/ScrollImage";
const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

const Hero = (props) => {
  return (
    <div className="relative flex w-screen flex-col pt-64 font-didact md:pt-72 lg:justify-start lg:pt-80">
      <div className="custom-padding2 title-dark-mode z-10 text-5xl font-medium md:text-8xl lg:text-9xl xl:text-[10rem] xl:leading-[9rem]  2xl:text-[11rem] 2xl:leading-[10rem]">
        {props.title.split(" ").map((word, idx) => (
          <div className="overflow-hidden last:pb-10">
            <motion.div
              className=""
              initial={{ y: 190 }}
              animate={{ y: 0 }}
              exit={{ y: 190 }}
              transition={{ ...transition, delay: idx / 8 }}
            >
              {word}
            </motion.div>
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ ...transition }}
        className="mt-12 flex aspect-square w-screen justify-center md:mt-20 md:aspect-video lg:mt-32 xl:mt-24"
      >
        <ScrollImage src={props.image} alt="Riyadh 4" sp={-15} scale="1.10" />
      </motion.div>
    </div>
  );
};

export default Hero;
