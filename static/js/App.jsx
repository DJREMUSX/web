import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/global/Navbar";
import Navbar2 from "./components/global/Navbar2";
import { AnimatePresence } from "framer-motion";
import About from "./pages/About";
import Projects from "./pages/Projects";
import RenderProj from "./pages/RenderProj";
import Footer from "./components/global/Footer";
import Footer2 from "./components/global/Footer2";
import CustomCursor from "./components/global/CustomCursor";
import Brainwash from "./pages/projects/Brainwash";
import { ParallaxProvider } from "react-scroll-parallax";
import Redirect from "./pages/redirect/Redirect";
function App() {
  const location = useLocation();
  const prevPathname = useRef("");

  useEffect(() => {
    if (location.pathname !== prevPathname.current) {
      console.log(
        "A:",
        location.pathname,
        "b:",
        prevPathname.current,
        prevPathname
      );
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 800);
    }

    prevPathname.current = location.pathname;
  }, [location.pathname]);

  function getDefaultMode() {
    const savedMode = localStorage.getItem("darkmode");
    return savedMode ? savedMode : "dark";
  }
  const [darkMode, setDarkMode] = useState(getDefaultMode());
  return (
    <div>
      <div className="z-10">
        {location.pathname !== "/a" && (
          <Navbar2
            changeDark={(dark) =>
              setDarkMode(dark === "dark" ? "light" : "light")
            }
            dark={darkMode}
          />
        )}
        <CustomCursor dark={darkMode} />
        <ParallaxProvider>
          <AnimatePresence mode="wait" initial={true}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              {/* <Route path="/projects/:projects" element={<RenderProj />}></Route> */}
              <Route path="/projects/brz" element={<Brz />}></Route>
              <Route path="/redirect/" element={<Home />}></Route>
              <Route path="/redirect/:id" element={<Redirect />}></Route>
            </Routes>
          </AnimatePresence>
        </ParallaxProvider>
        <Footer2 />
      </div>
    </div>
  );
}

export default App;
