import React, { useState, useRef, useEffect } from "react";
import Title from "./Title";
import { motion, transform, useAnimation } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";
const Faq = () => {
  const faqs = [
    {
      question: "What is branding, and why is it important for my business?",
      answer:
        "Branding is the process of creating a unique identity for your business. It encompasses your logo, visual elements, messaging, and overall perception. It's important because it helps differentiate your business, build trust, and connect with your target audience.",
    },
    {
      question: "Can you help me create a logo and visual assets for my brand?",
      answer:
        "Yes, I offer logo design and can assist you in creating visual assets that align with your brand identity and communicate your unique message effectively.",
    },
    {
      question:
        "Do you offer UI/UX design services? How can they improve my website or application?",
      answer:
        "Yes, I provide UI/UX design services. UI (User Interface) focuses on the visual elements and layout, while UX (User Experience) aims to enhance user satisfaction by improving usability and interaction. Good UI/UX design can make your website or application more intuitive, user-friendly, and visually appealing.",
    },
    {
      question: "What technologies do you use for frontend web development?",
      answer:
        "I utilize modern frontend technologies ReactJs framework to develop interactive and responsive websites, Motion Framer for transitions and animations, TailwindCSS for styling, Strapi for content manager.",
    },
    {
      question:
        "Can you provide examples of websites or applications you've designed?",
      answer:
        'Yes, you can see all my done websites at the "Explore my creativity" section if you scroll a little bit. For more examples (if they are not posted) you can can in touch with me.',
    },
    {
      question:
        "How do you ensure a seamless user interface (UI) design for my website?",
      answer:
        "I follow a user-centered design approach, conducting thorough research and analysis to understand your target audience. By incorporating best practices, usability testing, and iterative design processes, I strive to create a seamless and intuitive UI design for your website.",
    },
    {
      question:
        "What is your typical turnaround time for a branding or web development project?",
      answer:
        "The turnaround time varies based on the project's complexity and scope. However, I aim to provide a timeline and milestones at the beginning of the project to give you a clear idea of the expected timeframe.",
    },
    {
      question: "How do you determine project costs and payment terms?",
      answer:
        "Project costs are determined based on factors such as project scope, deliverables, and estimated hours required. I provide a detailed proposal outlining the costs and payment terms, which we can discuss and customize according to your specific needs.",
    },
    {
      question: "Do you offer responsive design for mobile devices?",
      answer:
        "Yes, all of my projects  responsive designs that adapt seamlessly to different screen sizes and devices. This ensures that your website or application looks and functions optimally across desktops, tablets, and mobile devices.",
    },
    // Add more FAQs as needed
  ];
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };
  const titleVar = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };

  const [isOpen, setIsOpen] = useState();

  const toggleDropdown = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="mb-60 ">
      <Title title="Most asked questions" />
      <div className="custom-padding2 space-y-5 font-poppins">
        {faqs.map((faq, index) => (
          <InView triggerOnce key={index}>
            {({ ref, inView }) => (
              <a
                ref={ref}
                data-color="#000000"
                data-textcolor="#ffffff"
                data-text="Click"
                className={`flex cursor-none flex-col overflow-hidden transition-all duration-500 ease-in-out 2xl:hover:translate-x-10`}
                onClick={() => toggleDropdown(index)}
              >
                <motion.div
                  className="light-background px-5 py-5 2xl:px-10"
                  initial={{ opacity: 0, y: 100 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ ...transition }}
                >
                  <button className="flex w-full cursor-none md:justify-between">
                    <div className="title-dark-mode text-left text-lg lg:text-lg 2xl:text-2xl">
                      {faq.question}
                    </div>
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`${
                          isOpen === index ? "rotate-180  " : "rotate-90"
                        } absolute h-6 w-6 stroke-neutral-500 transition duration-300 dark:stroke-neutral-200`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6 stroke-neutral-500 dark:stroke-neutral-200"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`subtitle-dark-mode overflow-hidden transition-all duration-1000 ease-in-out md:w-2/3 2xl:text-lg ${
                      isOpen === index ? "max-h-[110px]" : "max-h-0"
                    }`}
                  >
                    <div className="mt-3">{faq.answer}</div>
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

export default Faq;
