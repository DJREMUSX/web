import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import Clock from "react-live-clock";
import { useInView } from "react-intersection-observer";
import Splash from "../../assets/splash.jpg";
import { InView } from "react-intersection-observer";
import Splash2 from "../../assets/splash2.jpg";
import Button from "./Button";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const texts = {
  footer1: "Let’s talk about a project, collaboration or an idea you may have",
};

const footer = [
  {
    name: "Dribbble",
    redirect: "dribbble",
    class: "dribbble",
    color: "#E74D89",
  },
  {
    name: "Bēhance",
    redirect: "behance",
    class: "behance",
    color: "#E74D89",
  },
  { name: "Twitter", redirect: "twitter", class: "twitter", color: "#1DA1F2" },
  {
    name: "Instagram",
    redirect: "instagram",
    class: "instagram",
    color: "#EE0CA7",
  },
];

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };
const Footer2 = ({ id = "footer" }) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className="custom-padding mt-32 flex w-screen flex-col items-center justify-end pb-10 font-poppins lg:mt-56 lg:min-h-screen lg:items-start lg:pb-7 xl:mt-60"
        >
          <div className="title-dark-mode flex w-full flex-col text-3xl text-[6.5rem] leading-7 tracking-tight lg:tracking-tighter">
            <a
              data-textcolor="#ffffff"
              data-color="#000000"
              data-text="Send Email"
              className="mb-20 flex w-full flex-col justify-end text-4xl md:text-6xl lg:mb-5 lg:gap-y-8 lg:text-[8rem] lg:leading-[7rem] xl:gap-y-0 xl:text-[10rem] xl:leading-[8rem] 2xl:text-[12rem] 2xl:leading-[11rem]"
            >
              <div className="hidden items-center justify-between lg:block 2xl:w-2/3">
                <div className="flex overflow-hidden hover:invert">
                  <motion.div
                    initial={{ y: 300 }}
                    animate={inView ? { y: 0 } : { y: 300 }}
                    exit={{ y: 300 }}
                    transition={{ ...transition }}
                  >
                    Want to
                  </motion.div>
                </div>
                <div className="flex overflow-hidden">
                  <motion.div
                    initial={{ y: 300 }}
                    animate={inView ? { y: 0 } : {}}
                    exit={{ y: 300 }}
                    transition={{ ...transition }}
                  >
                    sex?
                  </motion.div>
                </div>
              </div>
              <div className="flex items-center justify-center text-center font-medium lg:hidden 2xl:w-2/3">
                <div className="flex w-max overflow-hidden ">
                  <motion.div
                    initial={{ y: 300 }}
                    animate={inView ? { y: 0 } : { y: 300 }}
                    exit={{ y: 300 }}
                    transition={{ ...transition }}
                  >
                    Want to sex?
                  </motion.div>
                </div>
              </div>
              <div className="hidden items-center justify-between lg:block lg:self-end lg:text-right xl:w-2/3">
                <div className="flex overflow-hidden lg:justify-end">
                  <motion.div
                    initial={{ y: 300 }}
                    animate={inView ? { y: 0 } : {}}
                    exit={{ y: 300 }}
                    transition={{ ...transition }}
                  >
                    Send me
                  </motion.div>
                </div>
                <div className="flex overflow-hidden lg:justify-end">
                  <motion.div
                    initial={{ y: 300 }}
                    animate={inView ? { y: 0 } : {}}
                    exit={{ y: 300 }}
                    transition={{ ...transition }}
                  >
                    an email
                  </motion.div>
                </div>
              </div>
              <div className="flex items-center justify-center text-center lg:hidden lg:w-2/3">
                <div className="flex w-max overflow-hidden ">
                  <motion.div
                    initial={{ y: 300 }}
                    animate={inView ? { y: 0 } : { y: 300 }}
                    exit={{ y: 300 }}
                    transition={{ ...transition }}
                  >
                    Send me an email!
                    <div className="h-[1px] w-full bg-light lg:hidden"></div>
                  </motion.div>
                </div>
              </div>
            </a>
          </div>
          <div className="mb-20 block w-max overflow-hidden ">
            <motion.div
              initial={{ y: 100 }}
              animate={
                inView
                  ? {
                      y: 0,
                    }
                  : {}
              }
              exit={{ y: 100 }}
              transition={{ ...transition }}
              className=" text-2xl md:gap-x-10 md:text-3xl lg:hidden"
            >
              <Link data-color="#E74D89" to="/redirect/dribbble">
                hello@remusbrz.com
                <div className="h-[1px] w-full bg-light lg:hidden"></div>
              </Link>
            </motion.div>
          </div>
          <div className="title-dark-mode flex w-full justify-center overflow-hidden lg:justify-between lg:text-2xl">
            <div className="grid grid-cols-2 gap-7 text-2xl md:gap-x-10 md:text-3xl lg:flex lg:text-2xl">
              {footer.map((item, idx) => (
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: 80 }}
                    animate={{
                      y: inView ? 0 : 80,
                    }}
                    exit={{ y: 80 }}
                    transition={{ ...transition, delay: idx * 0.05 }}
                  >
                    <Link
                      data-color={item.color}
                      to={`/redirect/${item.redirect}`}
                      className="light-background-2 flex aspect-square w-16 items-center justify-center rounded-lg transition-all md:w-20 lg:block lg:aspect-auto lg:w-auto lg:items-start lg:justify-start lg:rounded-none lg:bg-transparent lg:hover:tracking-widest"
                      target="_blank"
                    >
                      <p className="hidden lg:block">{item.name}</p>
                      <i className={`fa-brands fa-${item.class} lg:hidden`}></i>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
            <motion.div
              initial={{ y: 100 }}
              animate={
                inView
                  ? {
                      y: 0,
                    }
                  : {}
              }
              exit={{ y: 100 }}
              transition={{ ...transition }}
              className="hidden gap-x-5  md:gap-x-10 lg:flex"
            >
              <Link
                data-color="#E74D89"
                to="/redirect/dribbble"
                className="transition-all hover:tracking-widest"
              >
                hello@remusbrz.com
              </Link>
            </motion.div>
          </div>
          <div className="my-8 h-[1px] w-full bg-gray-300"></div>
          <div className="w-full overflow-hidden ">
            <motion.div
              initial={{ y: 300 }}
              animate={{
                y: inView ? 0 : 300,
              }}
              exit={{ y: 300 }}
              transition={{ ...transition }}
              className="subtitle-dark-mode  flex flex-col space-y-2 text-sm tracking-tight sm:flex-row sm:space-y-0 md:justify-between md:text-base xl:text-lg 2xl:text-xl"
            >
              <div className="flex items-center justify-between space-x-5 ">
                <div className="flex items-center space-x-2 ">
                  <div>With love from Sibiu, Romania</div>
                  <i className="fa-solid fa-mountain-sun hidden text-sm md:block"></i>
                </div>
                <Clock
                  format={"HH:mm a"}
                  ticking={true}
                  timezone={"Europe/Bucharest"}
                />
              </div>
              <a
                onClick={() =>
                  window.scrollBy({
                    top: -document.body.scrollHeight,
                    behavior: "smooth",
                  })
                }
                className={
                  "group order-first flex cursor-none items-center justify-center space-x-2 md:order-last"
                }
              >
                <p>Back to top</p>
                <ArrowUpIcon className="h-5 w-5 pt-1 transition group-hover:-translate-y-2" />
              </a>
            </motion.div>
          </div>
        </div>
      )}
    </InView>
  );
};

export default Footer2;
