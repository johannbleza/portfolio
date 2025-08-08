"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1000);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 800px)",
        isMobile: "(max-width: 799px)",
      },
      (context) => {
        const isDesktop = context.conditions?.isDesktop;
        const loader = gsap.timeline();
        const loaderText = gsap.timeline();
        loader
          .to(".shape", {
            duration: 2 + 0.25,
            attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" },
            ease: "power3.in",
          })
          .to(".shape", {
            duration: isDesktop ? 1 : 1.5,
            ease: "power2",
            attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" },
          });
        loaderText
          .to("#loader-text", {
            delay: 0.5,
            opacity: 1,
          })
          .to("#loader-text", {
            delay: 0.5,
            opacity: 0,
          });
      },
    );
  }, []);

  return (
    <div className="absolute -top-10 left-0 w-full h-full pointer-events-none z-50">
      <div
        className="absolute text-6xl text-white w-full h-dvh flex justify-center items-center opacity-0"
        id="loader-text"
      >
        Nigga
      </div>
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio={isMobile ? "xMaxYMin slice" : "none"}
        className="w-full h-full"
      >
        <path
          className="shape"
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default Loader;
