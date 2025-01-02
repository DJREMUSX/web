import React, { useState, useEffect } from "react";
import LogoWhite from "../../assets/logowhite2.svg";
import LogoBlack from "../../assets/logoblack2.svg";
import { Link } from "react-router-dom";
import Clock from "react-live-clock";

const Navbar2 = (props) => {
  const [darkMode, setDarkMode] = useState(props.dark);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  useEffect(() => {
    let prevScrollPosition = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      // Check if the user has scrolled at least 50 pixels
      if (Math.abs(currentScrollPosition - prevScrollPosition) > 50) {
        setIsScrollingUp(currentScrollPosition < prevScrollPosition);
        prevScrollPosition = currentScrollPosition;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ThemeButton = () => {
    return (
      <div className="flex items-center space-x-5">
        <div
          onClick={() => {
            setDarkMode((prevDarkMode) =>
              prevDarkMode === "dark" ? "light" : "dark"
            );
            props.changeDark(darkMode);
          }}
          className={"w-20x group flex items-center justify-center space-x-2"}
        >
          {/* ICON LUNA */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={
              "h-6 w-6 stroke-[#111414] " +
              (darkMode === "dark" && "hidden group-active:opacity-0")
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>

          {/* ICON SOARE */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={
              "h-6 w-6 stroke-[#EFEFEF] " + (darkMode === "light" && "hidden")
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
          <div className="font-didact">
            {darkMode === "dark" ? "Light" : "Dark"}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* bg-[#EFEFEF]/80 */}
      <header
        className={`custom-padding fixed top-0 z-40 w-full bg-[#f8f8f8] py-5 transition-transform duration-500 dark:bg-[#111414] lg:rounded-b-xl ${
          !isScrollingUp ? "lg:-translate-y-full" : "lg:translate-y-0"
        }`}
      >
        <div className="title-dark-mode flex flex-col items-center justify-between space-y-3 sm:flex-row sm:space-y-0 xl:text-lg 2xl:text-xl">
          <Link to="/">
            <img
              src={darkMode === "dark" ? LogoWhite : LogoBlack}
              alt=""
              className="h-6 xl:h-8"
            />
          </Link>
          <div className="flex w-full items-center justify-between sm:w-max">
            <div className="space-x-4 lg:space-x-6 xl:space-x-8">
              <Link to="/">Home</Link>
              <Link to="/projects/brainwash">Brainwash</Link>
              {/*
            <Link to="/games/colorgame">Colorgame</Link>
            <Link to="/games/tictactoe">Tictactoe</Link>
            <Link to="/games/towerofhanoi">Towerofhanoi</Link>
            */}
            </div>
            {/** <a className="block sm:hidden">
              <ThemeButton />
            </a> */}
          </div>
          {/** <div className="hidden sm:block">
            <ThemeButton />
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Navbar2;
