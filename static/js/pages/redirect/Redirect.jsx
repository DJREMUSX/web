import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const redirectionUrls = {
  dribbble: "https://dribbble.com/remusbrz",
  behance: "https://www.behance.net/remusbrz",
  twitter: "https://twitter.com/remusbrz",
  instagram: "https://www.instagram.com/remusbrz/",
};
const Redirect = () => {
  let { id } = useParams();
  useEffect(() => {
    if (redirectionUrls.hasOwnProperty(id)) {
      window.location.replace(redirectionUrls[id]);
    }
  }, [id]);

  return (
    <div className="custom-padding2 title-dark-mode flex h-[60vh] flex-col items-center justify-end space-y-10">
      <p className="text-center font-poppins text-7xl leading-[5.5rem]">
        {redirectionUrls.hasOwnProperty(id) ? (
          <p>
            You will be redirected soon. <br /> If you had not been <br />
            redirected, click here:
          </p>
        ) : (
          <p>
            That url doesn't exist or has been replaced. Click here to go to
            homepage:
          </p>
        )}
      </p>

      <a
        data-color="#ffffff"
        data-textcolor="#000000"
        data-text="Click"
        href={redirectionUrls.hasOwnProperty(id) ? redirectionUrls[id] : "/"}
        className="group flex items-center space-x-3 rounded-full bg-dark px-7 py-6 font-poppins text-xl font-medium text-white"
      >
        <div className="transition duration-300 ease-out group-hover:-rotate-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="aspect-square h-7 stroke-light"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
        {redirectionUrls.hasOwnProperty(id) ? (
          <p>Go to {id}</p>
        ) : (
          <p>Go to homepage</p>
        )}
      </a>
    </div>
  );
};

export default Redirect;
