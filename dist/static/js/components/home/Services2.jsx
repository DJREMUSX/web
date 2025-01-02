import React, { useEffect, useState } from "react";
import Title from "./Title";
import { motion, transform, useAnimation } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";
import ScrollImage from "../blocks/ScrollImage";

const cards = [
  {
    Title: "Web Develop",
    Description:
      "Custom-coded web development using React.js, Framer Motion, and Strapi. Exceptional digital products built from scratch with precision and tested for safety.",
    Image:
      "https://cdn.dribbble.com/userupload/2897809/file/original-9b809d30eae216a7e468ae368be1677e.png?compress=1&resize=1024x768",
    Tags: [
      "Development",
      "Responsive",
      "CMS",
      "Mobile-Friendly Websites",
      "Maintenance",
      "Animations",
      "Performance Monitoring",
      "API Integration",
      "Interactions",
      "Hosting",
      "Deployment",
    ],
    Textcolor: "#C3FF44",
    Cursorcolor: "#111414",
    Cursortext1: "Pure",
    Cursortext2: "Code",
  },
  {
    Title: "Brand Identity",
    Description:
      "Crafted with care, my brand identity services deliver exceptional results. I create stunning brand identity assets from logo design to stationary, advertising materials and other visual assets, that leave a lasting impact.",
    Color: "#EFEFEF",
    Tags: [
      "Design Systems",
      "Brand Assets",
      "Packaging",
      "Advertising Assets",
      "Brandbook",
      "Design Advisory",
    ],
    Image:
      "https://cdn.dribbble.com/userupload/4399646/file/original-c5ff160359146efeec3e697837af40be.png?compress=1&resize=1024x768",
    Textcolor: "#FFC1B4",
    Cursorcolor: "#111414",
    Cursortext1: "Scaa",
    Cursortext2: "aale",
  },
  {
    Title: "Web Design",
    Description:
      "Elevate your online presence with my web design services. From concept to execution, I work closely with you to create visually stunning websites that align with your goals and resonate with your target audience.",
    Color: "#EFEFEF",
    Tags: [
      "Responsive Design",
      "UX & UI",
      "Clean Design",
      "Interactive Elements",
      "Modern Aesthetics",
      "Creative Layouts",
      "Wireframing",
      "Brand Integration",
      "User-Centric Approach",
      "Prototyping",
    ],
    Image:
      "https://cdn.dribbble.com/userupload/5016411/file/original-b8c432eb09f2e8bdd89c1d37101afef2.png?compress=1&resize=1024x768",
    Textcolor: "#FFC1B4",
    Cursorcolor: "#111414",
    Cursortext1: "Scaa",
    Cursortext2: "aale",
  },
];

const Services2 = () => {
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };
  return (
    <div className="w-screen font-poppins">
      <Title title="My services" />
      <div className="custom-padding2 flex flex-col space-y-8 md:space-y-12 lg:space-y-16 xl:space-y-20">
        {cards.map((item, index) => (
          <InView triggerOnce key={index}>
            {({ inView, ref }) => (
              <a
                ref={ref}
                data-color={item.Cursorcolor}
                data-textcolor={item.Textcolor}
                data-text={item.Cursortext1 + " " + item.Cursortext2}
                key={index}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 100 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  exit={{ opacity: 0, scale: 0.9, y: 100 }}
                  transition={{ ...transition }}
                  className="light-background flex h-full w-full flex-col space-y-5 md:flex-row 2xl:space-y-0"
                >
                  <div className="lg:w2/5 aspect-[16/10] md:w-1/3">
                    <ScrollImage sp={-5} src={item.Image} />
                  </div>
                  <div className="w-full space-y-3 px-5 pb-5 md:w-3/5 lg:w-1/2 2xl:space-y-5 2xl:self-end 2xl:px-9 2xl:py-9 2xl:pr-20">
                    <p className="title-dark-mode bg text-4xl tracking-tight 2xl:text-5xl">
                      {item.Title}
                    </p>
                    <p className="subtitle-dark-mode w-full 2xl:text-lg">
                      {item.Description}
                    </p>
                    <div className="flex flex-wrap gap-2 overflow-hidden lg:gap-3">
                      {item.Tags.map((tag, id) => {
                        return (
                          <span
                            className="max-w title-dark-mode light-background-2 rounded-full px-2 py-1 text-sm tracking-tight lg:px-4 lg:text-base"
                            key={id}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </a>
            )}
          </InView>
        ))}
      </div>
    </div>
  );
};

export default Services2;
