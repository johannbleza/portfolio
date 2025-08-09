"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { ArrowUp, SquareArrowOutUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Contact = () => {
  useGSAP(() => {
    const split = SplitText.create(".contact-text", {
      type: "lines",
      mask: "lines",
    });

    gsap.from("#scrollUp", {
      y: 500,
      scrollTrigger: {
        start: "bottom bottom",
        end: "bottom bottom",
        scrub: 2,
      },
    });
    gsap.from(split.lines, {
      y: 100,
      scrollTrigger: {
        start: "bottom bottom",
        end: "bottom bottom",
        scrub: 2,
      },
    });
    gsap.to("#contact", {
      backgroundColor: "oklch(92.3% 0.003 48.717)",
      scrollTrigger: {
        scrub: 1,
        trigger: "body",
        start: "bottom bottom",
        end: "bottom bottom",
      },
    });
  }, []);
  return (
    <div
      className="bg-black min-h-dvh  mt-[-100dvh] overflow-hidden"
      id="contact"
    >
      <div className="md:w-[80%] mx-auto flex flex-col justify-between h-dvh  p-4 md:p-0">
        <div className="flex flex-col gap-6 md:text-xl">
          <h1 className="text-[12vw] font-bold text-stone-900 tracking-tighter">
            Contact me @
          </h1>
          <div className="border-b-1 flex justify-between py-2">
            <p className="contact-text">Github</p>
            <p className="contact-text">
              <SquareArrowOutUpRight className="size-4 md:size-6" />
            </p>
          </div>
          <div className="border-b-1 flex justify-between py-2">
            <p className="contact-text">LinkedIn</p>
            <p className="contact-text">
              <SquareArrowOutUpRight className="size-4 md:size-6" />
            </p>
          </div>
          <div className="border-b-1 flex justify-between py-2">
            <p className=" contact-text">Email</p>
            <p className=" contact-text">johann.bleza@icloud.com</p>
          </div>
          <div className="border-b-1 flex justify-between py-2">
            <p className="contact-text">Phone</p>
            <p className="contact-text">+63 969 328 6947</p>
          </div>
          <div className="border-b-1 flex justify-between py-2">
            <p className="contact-text">Location</p>
            <p className="contact-text">Dasmariñas, Cavite, Philippines 4114</p>
          </div>
        </div>
        <div className="mt-20 flex justify-between items-end md:mb-16">
          <div>
            <h1 className="">© 2025 Johann Bleza</h1>
            <h1 className="">All rights reserved.</h1>
          </div>
          <div
            className="bg-stone-300 rounded-full size-20 text-stone-900 flex justify-center items-center"
            id="scrollUp"
            onClick={() => gsap.to(window, { scrollTo: 0, duration: 1 })}
          >
            <ArrowUp className="size-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
