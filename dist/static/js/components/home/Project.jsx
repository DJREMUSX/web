import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Title from "./Title";
import ScrollImage from "../blocks/ScrollImage";
import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";
const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] };

export const projects = [
  {
    image:
      "https://assets.website-files.com/616d317372b9aa82983a918f/6405e0976389f93af39dee86_6405e04c6cce847589920dc5_image%20271.webp",
    alt: "brainwash thumbnail",
    projname: "Mail design",
    projtext: "Community hub for Romanian designers",
    tags: ["Branding", "Manager", "Event organizer"],
    link: "/projects/brainwash",
    external: false,
    color: "#8FC6AC",
    colortext: "#043573",
    colorbg: "#FB8C9A",
  },
  {
    image: "https://imgur.com/P3XClSW.png",
    alt: "Adpro.uk",
    projname: "AD Production",
    projtext: "Portfolio website for a digital content agency",
    tags: ["Web Design", "Developing", "Maintenance"],
    link: "https://adpro.uk/",
    external: true,
    color: "#6C0524",
    colortext: "#ffffff",
    colorbg: "#BD1547",
  },
  {
    image: "https://imgur.com/0fweuHK.png",
    alt: "Metacruise",
    projname: "Metacruise",
    projtext: "Discover a new level of art with a car NFT collection",
    tags: ["Brand design"],
    link: "",
    external: true,
    color: "#991010",
    colortext: "#ffffff",
  },
  {
    image: "https://imgur.com/LX1MQO9.png",
    alt: "Metahub",
    projname: "Metahub",
    projtext: "Crafting the next Generation of virtual realities",
    tags: ["Brand design"],
    link: "",
    external: true,
    color: "#D0A979",
    colortext: "#ffffff",
  },
];

function MyComponent(props) {
  if (props.url) {
    if (props.external) {
      return (
        <a
          href={props.url}
          data-color={props.color}
          data-textcolor={props.textcolor}
          data-text="View Live"
          target="_blank"
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.url}
          data-color={props.color}
          data-textcolor={props.textcolor}
          data-text="View Case"
        >
          {props.children}
        </Link>
      );
    }
  } else {
    return (
      <a
        data-color={props.color}
        data-textcolor={props.textcolor}
        data-text="Soon Soon"
      >
        {props.children}
      </a>
    );
  }
}

const Project = () => {
  return (
    <>
      <Title title="Explore my creativity" />
      <div className="custom-padding2 grid gap-y-24 font-poppins lg:grid-cols-2 2xl:gap-y-36 ">
        {projects.map((data, idx) => {
          return (
            <MyComponent
              url={data.link}
              external={data.external}
              color={data.color}
              textcolor={data.colortext}
            >
              <div
                className={`${idx === 1 ? "lg:ml-28 xl:ml-36" : ""} ${
                  idx === 2 ? "lg:mr-28 xl:mr-36" : ""
                } group space-y-5 2xl:space-y-10`}
                key={idx}
              >
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <div ref={ref}>
                      <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{
                          scale: inView ? 1 : 0.9,
                        }}
                        transition={{ ...transition, delay: 0.3 }}
                        className="aspect-square w-full"
                      >
                        <ScrollImage src={data.image} sp={-10} alt={data.alt} />
                      </motion.div>
                    </div>
                  )}
                </InView>
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <div ref={ref}>
                      <span className="title-dark-mode flex overflow-hidden text-4xl tracking-tight md:text-5xl md:leading-[3.6rem]">
                        <motion.span
                          initial={{ y: 80 }}
                          animate={{
                            y: inView ? 0 : 80,
                          }}
                          exit={{ y: 80 }}
                          transition={{ ...transition, delay: 0.3 }}
                        >
                          {data.projname}
                        </motion.span>
                      </span>
                      <span className="subtitle-dark-mode mt-2 flex overflow-hidden text-xl font-normal tracking-tight md:text-2xl md:leading-[2rem]">
                        <motion.span
                          initial={{ y: 40 }}
                          animate={{
                            y: inView ? 0 : 100,
                          }}
                          exit={{ y: 100 }}
                          transition={{ ...transition, delay: 0.3 }}
                        >
                          {data.projtext}
                        </motion.span>
                      </span>
                      <div className="mt-4 flex flex-wrap gap-x-2 gap-y-2 overflow-hidden lg:gap-x-3 lg:gap-y-2">
                        {data.tags.map((tag, id) => {
                          return (
                            <motion.span
                              initial={{ y: 60 }}
                              animate={{
                                y: inView ? 0 : 60,
                              }}
                              exit={{ y: 60 }}
                              className="max-w light-background-2 title-dark-mode rounded-full px-2 py-1 text-sm md:text-base lg:px-4"
                              key={id}
                              transition={{ ...transition, delay: 0.3 }}
                            >
                              {tag}
                            </motion.span>
                          );
                        })}
                      </div>
                      <div className="flex flex-col overflow-hidden lg:hidden">
                        <motion.span
                          initial={{ y: 60 }}
                          animate={{
                            y: inView ? 0 : 60,
                          }}
                          exit={{ y: 60 }}
                          transition={{ ...transition, delay: 0.3 }}
                        >
                          <div
                            className={`mt-4 flex w-full items-center justify-center rounded-full py-2 text-lg text-white md:text-xl`}
                            style={{
                              backgroundColor: `${
                                data.link
                                  ? data.external
                                    ? data.colorbg
                                    : data.colorbg
                                  : "#000000"
                              }`,
                            }}
                          >
                            {data.link
                              ? data.external
                                ? "View Live"
                                : "View Case"
                              : "Coming Soon"}
                          </div>
                        </motion.span>
                      </div>
                    </div>
                  )}
                </InView>
              </div>
            </MyComponent>
          );
        })}
      </div>
    </>
  );
};

export default Project;
