import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";

const Paragraph = (props) => {
  const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] };

  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className="subtitle-dark-mode text-lg md:text-xl xl:text-2xl 2xl:leading-10"
        >
          <span className="flex flex-col overflow-hidden">
            <motion.span
              initial={{ y: 250 }}
              animate={inView ? { y: 0 } : {}}
              exit={{ y: 250 }}
              transition={{ ...transition }}
            >
              {props.text}
            </motion.span>
          </span>
        </div>
      )}
    </InView>
  );
};

export default Paragraph;
