import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollImage from "../blocks/ScrollImage";

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

const OneImg = (props) => {
  return (
    <>
      <div className="flex justify-center">
        <motion.div
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ ...transition }}
          className="aspect-[16/12] w-full lg:aspect-video"
        >
          <ScrollImage
            sp={-10}
            src={props.img}
            alt={props.alt}
            className={props.class}
            scale={props.scale}
          />
        </motion.div>
      </div>
    </>
  );
};

export default OneImg;
