import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Sectiune2 = () => {
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };
  const text =
    "Transforming your digital\npresence with my comprehensive branding design, web design,\nand web development services.";
  const lines = text.split("\n");
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className="custom-padding2 title-dark-mode mt-32 flex flex-col items-center justify-center space-y-4 font-poppins md:mt-36 lg:mt-40 lg:justify-start 2xl:space-y-10"
        >
          <motion.p
            className="text-center text-3xl md:text-5xl 2xl:text-7xl 2xl:leading-[5.5rem]"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: 50 }}
            transition={{ ...transition, duration: 0.5 }}
          >
            {lines.map((line, index) => (
              <React.Fragment key={index}>
                {line.split(" ").map((word, idx) => {
                  return (
                    <motion.span
                      key={idx}
                      className="ease-[cubic-bezier(0.6, -0.05, 0.01, 0.9)] mr-[0.25em] inline-block transition duration-300 lg:hover:-translate-y-3"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      exit={{ opacity: 0 }}
                      transition={{
                        ...transition,
                        delay: (index + idx / 10) * 0.3,
                      }}
                    >
                      {word}
                    </motion.span>
                  );
                })}
                <br className="hidden lg:block" />
              </React.Fragment>
            ))}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 50 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ...transition,
                      delay:
                        (lines.length - 1 + text.split(" ").length / 10) * 0.1,
                    },
                  }
                : {}
            }
            exit={{ opacity: 0, y: 50 }}
            transition={{
              ...transition,
            }}
            data-color="#000000"
            data-textcolor="#ffffff"
            data-text="Click"
            className="group flex items-center space-x-3 font-poppins text-xl font-medium"
          >
            <div className="rounded-full bg-dark p-2 transition duration-300 ease-out group-hover:-rotate-45 2xl:p-3">
              <ArrowRightIcon className="aspect-square h-6 stroke-light 2xl:h-7" />
            </div>
            <p>Read About Me</p>
          </motion.a>
        </div>
      )}
    </InView>
  );
};

export default Sectiune2;
