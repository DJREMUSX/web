import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Title = (props) => {
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div className="custom-padding2 title-dark-mode mb-12 mt-36 w-screen font-poppins 2xl:mt-72">
          <div ref={ref} className="title-style h-min flex-wrap gap-x-2">
            <span className="flex flex-col overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: 50 }}
                transition={{ ...transition }}
              >
                {props.title}
              </motion.span>
            </span>
          </div>
        </div>
      )}
    </InView>
  );
};

export default Title;
