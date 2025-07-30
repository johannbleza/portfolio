"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const TextScroll = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: (e) => {
          direction = e.direction * -1;
        },
      },
      x: "-300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };
  return (
    <div ref={slider} className="flex whitespace-nowrap">
      {" "}
      <h1
        ref={firstText}
        className="text-stone-100 font-medium text-[10vw]  tracking-tight z-0"
      >
        FRONT-END DEVELOPER
      </h1>{" "}
      <h1
        ref={secondText}
        className="text-stone-100 font-medium text-[10vw]  tracking-tight z-0"
      >
        FRONT-END DEVELOPER
      </h1>
    </div>
  );
};

export default TextScroll;
