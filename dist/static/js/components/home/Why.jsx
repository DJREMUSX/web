import React, { useEffect, useState } from "react";
import Title from "./Title";
import { motion, transform, useAnimation } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";

const cards = [
  {
    Category: "Unique Branding",
    Title: "Distinctive Identity",
    Description:
      "Custom-coded websites offer the opportunity to create a unique brand presence.",
    Stattext: "Custom-code vs. Templates",
    Stat: "72%",
    Statafter: "favor custom design for trust and professionalism - 99designs",
    Textcolor: "#FFC8E8",
    Cursorcolor: "#111414",
    Cursortext1: "Bran",
    Cursortext2: "ding",
  },
  {
    Category: "Ownership and Control",
    Title: "Full Ownership",
    Description:
      "With a custom-coded website, you have complete control and ownership over your website.",
    Stattext: "Custom-code vs. Website Builders",
    Stat: "68% ",
    Statafter:
      "of small businesses prioritize control with custom-coded websites - The Manifest",
    Textcolor: "#A0D0D6",
    Cursorcolor: "#111414",
    Cursortext1: "All",
    Cursortext2: "Yours",
  },
  {
    Category: "Scalability",
    Title: "Future Growth",
    Description:
      "Custom-coded websites offer flexibility for expanding and adding complex functionalities.",
    Stattext: "Custom-code vs. Website Builders",
    Stat: "48% ",
    Statafter:
      " of small businesses effortlessly add new features with custom websites. - Clutch",
    Textcolor: "#FFC1B4",
    Cursorcolor: "#111414",
    Cursortext1: "Scaa",
    Cursortext2: "aale",
  },
  {
    Category: "Performance",
    Title: "Optimal Speed",
    Description:
      "Hand-coding allows for optimized performance, resulting in faster loading times.",
    Stattext: "Custom-code vs. CMS Websites",
    Stat: "33% ",
    Statafter: " of custom-coded websites are faster on average worldwide.",
    Textcolor: "#D8B4FF",
    Cursorcolor: "#111414",
    Cursortext1: "Spee",
    Cursortext2: "eeed",
  },
];

const Why = () => {
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

  const [lastScrollY, setLastScrollY] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setLastScrollY(currentScrollY);

      const img1 = document.getElementById(`testid1`);

      const rectimg1 = img1?.getBoundingClientRect();
      const viewportHeight = window.innerHeight; // Height of the viewport

      // Calculate the center of the device height
      const centerHeight = viewportHeight / 2;

      // Calculate the distance between the element's center and the center of the device height
      const elementHeight = rectimg1 ? rectimg1.height : 0;
      const elementTop = rectimg1 ? rectimg1.top : 0;
      const elementCenter = elementTop + elementHeight / 2;
      const distanceFromCenter = elementCenter - centerHeight;

      // Map the distance to a value between 0 and 100
      const mappedValue = distanceFromCenter / centerHeight;
      if (mappedValue < 100 && mappedValue >= 0) {
        setValue(mappedValue);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div className="w-screen font-poppins">
      <Title title="Why would you choose custom-code website?" />
      <div className="custom-padding2 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 2xl:grid-cols-4">
        {cards.map((item, index) => (
          <InView triggerOnce key={index}>
            {({ inView, ref }) => (
              <a
                ref={ref}
                data-color={item.Cursorcolor}
                data-textcolor={item.Textcolor}
                data-text={item.Cursortext1 + " " + item.Cursortext2}
                style={{
                  transform: `translateY(${(index + 1) * value * 50}px)`,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 100 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  exit={{ opacity: 0, scale: 0.9, y: 100 }}
                  transition={{ ...transition, delay: index * 0.2 }}
                  className="group relative h-full"
                >
                  <div className="light-background absolute flex h-full w-full items-center justify-center overflow-hidden">
                    <div
                      className="aspect-square h-0 rounded-full opacity-95 transition-all duration-500 ease-in-out group-hover:h-[200%] group-hover:opacity-100"
                      style={{
                        backgroundColor: `${item.Textcolor}`,
                      }}
                    ></div>
                  </div>
                  <div className="relative w-full space-y-6 p-5 2xl:p-9">
                    <div className="z-20 space-y-3">
                      <p className="subtitle-dark-mode text-sm uppercase opacity-60">
                        {item.Category}
                      </p>
                      <p className="title-dark-mode w-min text-4xl">
                        {item.Title}
                      </p>
                      <p className="title-dark-mode text-base">
                        {item.Description}
                      </p>
                    </div>
                    <div className="relative px-10">
                      <div className="h-[1px] w-full bg-neutral-500 opacity-20"></div>
                    </div>
                    <div className="space-y-2">
                      <p className="subtitle-dark-mode text-sm uppercase opacity-60">
                        {item.Stattext}
                      </p>
                      <p className="title-dark-mode">
                        <span className="text-4xl">{item.Stat}</span>{" "}
                        {item.Statafter}
                      </p>
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

export default Why;
