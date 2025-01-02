import React from "react";

const Images = (props) => {
  return (
    <>
      <div className="w-screen space-y-8 md:hidden lg:space-y-20">
        {props.children}
      </div>
      <div className="custom-padding2 hidden w-screen md:block lg:space-y-7 xl:space-y-10 2xl:space-y-16">
        {props.children}
      </div>
    </>
  );
};

export default Images;
