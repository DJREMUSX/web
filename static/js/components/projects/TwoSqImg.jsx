import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollImage from "../blocks/ScrollImage";
const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

const TwoSqImg = (props) => {
  return (
    <div
      className={`flex flex-col gap-x-8 gap-y-8 lg:flex-row lg:gap-y-0 lg:gap-x-7 xl:gap-x-10 2xl:gap-x-16 ${
        !props.img2 && "justify-center"
      }`}
    >
      <div className="flex justify-center lg:w-1/2">
        <motion.div
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ ...transition }}
          className="aspect-square h-full w-full"
        >
          <ScrollImage
            src={props.img1}
            sp={-10}
            alt={props.alt}
            className={props.class}
            scale={props.scale}
          />
          {/* add more images here */}
        </motion.div>
      </div>

      <div
        className={`flex justify-center lg:w-1/2 ${!props.img2 && "hidden"}`}
      >
        <motion.div
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ ...transition }}
          className="aspect-square h-full w-full"
        >
          <ScrollImage
            src={props.img2}
            alt={props.alt2}
            sp={-10}
            className={props.class2}
            scale={props.scale2}
          />
          {/* add more images here */}
        </motion.div>
      </div>
    </div>
  );
};

export default TwoSqImg;
