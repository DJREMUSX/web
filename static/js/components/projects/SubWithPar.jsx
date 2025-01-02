import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";
const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] };

const SubWithPar = (props) => {
  return (
    <div className="custom-padding2 custom-margin w-screen items-center gap-x-20 space-y-10 font-poppins lg:flex lg:space-y-0 2xl:space-y-0">
      <div className="flex h-min flex-col space-y-10 lg:flex-row lg:space-y-0">
        <InView triggerOnce>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className="title-dark-mode gap-x-2 text-xl font-medium md:text-2xl lg:w-1/3 lg:text-xl xl:text-2xl"
            >
              <span className="flex flex-col overflow-hidden lg:w-3/4">
                <motion.span
                  initial={{ y: 100 }}
                  animate={inView ? { y: 0 } : {}}
                  exit={{ y: 100 }}
                  transition={{ ...transition }}
                >
                  {props.title}
                </motion.span>
              </span>
            </div>
          )}
        </InView>
        <div className="space-y-6 lg:w-2/3">{props.children}</div>
      </div>
    </div>
  );
};

export default SubWithPar;
