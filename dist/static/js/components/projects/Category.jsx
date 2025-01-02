import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

const Category = (props) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <div ref={ref} className="custom-padding2 w-screen pb-10">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 30 }}
              animate={inView ? { y: 0 } : {}}
              exit={{ y: 30 }}
              transition={{ ...transition }}
              className="flex items-center space-x-5 font-poppins text-lg text-dark"
            >
              <div className="h-0.5 w-12 bg-dark"></div>
              <div>{props.number}</div>
              <div>{props.title}</div>
            </motion.div>
          </div>
        </div>
      )}
    </InView>
  );
};

export default Category;
