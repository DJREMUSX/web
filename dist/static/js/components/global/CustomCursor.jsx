import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function hexToRgba(hex, opacity) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

const CustomCursor = (props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const [color, setColor] = useState(
    props.dark === "dark" ? "#000000" : "#000000"
  );
  const [textColor, setTextColor] = useState(
    props.dark === "dark" ? "#000000" : "#000000"
  );
  const [text, setText] = useState("");
  const location = useLocation();
  useEffect(() => {
    setColor(props.dark === "dark" ? "#000000" : "#000000");
    setTextColor(props.dark === "dark" ? "#000000" : "#000000");
  }, [props.dark]);
  let links = document.querySelectorAll("a");
  useEffect(() => {
    const timer = setTimeout(() => {
      links = document.querySelectorAll("a");

      handleLinkHoverEvents();
    }, 1500);
    addEventListeners();

    return () => {
      removeEventListeners();
      clearTimeout(timer);
    };
  }, [location, props.dark]);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    setHovered(false);
    setText("");
    setColor(props.dark === "dark" ? "#000000" : "#000000");
    setTextColor(props.dark === "dark" ? "#000000" : "#000000");
  };

  const handleLinkHoverEvents = () => {
    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        setHovered(true);
        setText(link.getAttribute("data-text"));
        setColor(
          props.dark === "dark"
            ? link.getAttribute("data-colordark")
            : link.getAttribute("data-color")
        );
        setTextColor(
          props.dark === "dark"
            ? link.getAttribute("data-textcolordark")
            : link.getAttribute("data-textcolor")
        );
      });
      link.addEventListener("mouseout", () => {
        setHovered(false);
        setText("");
        setColor(props.dark === "dark" ? "#000000" : "#000000");
        setTextColor(props.dark === "dark" ? "#000000" : "#000000");
      });
    });
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseLeave = () => {
    setActive(false);
  };

  const onMouseEnter = () => {
    setActive(true);
  };

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: color
          ? hovered
            ? hexToRgba(color, "0.9")
            : hexToRgba(color, "1")
          : !text
          ? hexToRgba(props.dark === "dark" ? "#000000" : "#000000", "0.9")
          : hexToRgba(props.dark === "dark" ? "#000000" : "#000000", "1"),
      }}
      className="pointer-events-none fixed z-[999] -translate-x-1/2 -translate-y-1/2 rounded-full font-poppins transition duration-300"
    >
      <div
        className={`flex aspect-square h-5 items-center justify-center rounded-full text-center transition-all duration-300 ${
          hovered ? (!text ? "h-8" : "h-[5.5rem]") : ""
        }`}
      >
        <div
          className={`justify-center] flex max-w-min flex-col items-center text-lg font-medium leading-5 transition-all duration-300 ${
            hovered ? "scale-100" : "scale-0"
          }`}
          style={{ color: textColor }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;
