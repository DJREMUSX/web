import React, { useEffect, useState } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const ScrollImage = ({ src, alt, className, scale, sp }) => {
  const [translateY, setTranslateY] = useState();

  return (
    <>
      <ParallaxBanner
        className="hidden h-full w-full xl:block"
        layers={[
          {
            children: (
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              ></div>
            ),
            expanded: false,
            speed: sp ? sp : -10,
            scale: [1.1, 1.1],
          },
        ]}
      />
      <ParallaxBanner
        className="block h-full w-full xl:hidden"
        layers={[
          {
            children: (
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              ></div>
            ),
            expanded: false,
            speed: sp ? (sp * 50) / 100 : -10,
            scale: [1.1, 1.1],
          },
        ]}
      />
    </>
  );
};

export default ScrollImage;
