"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUp, SquareArrowOutUpRight } from "lucide-react";

const Contact = () => {
  useGSAP(() => {
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
    <div className="bg-black min-h-dvh  mt-[-100vh] relative" id="contact">
      <div className="md:w-[80%] mx-auto flex flex-col justify-between h-dvh p-4 md:p-0">
        <div className="flex flex-col gap-6 md:text-xl">
          <h1 className="text-[11vw] font-bold text-stone-900 tracking-tighter">
            Contact me @
          </h1>
          <div className="border-b-1 flex justify-between py-2">
            <p>Github</p>
            <SquareArrowOutUpRight className="size-4 md:size-6" />
          </div>
          <div className="border-b-1 flex justify-between py-2">
            <p>LinkedIn</p>
            <SquareArrowOutUpRight className="size-4 md:size-6" />
          </div>
          <div className="border-b-1 flex justify-between py-2">
            <p>Email</p>
            <p>johann.bleza@icloud.com</p>
          </div>
          <div className="border-b-1 flex justify-between py-2">
            <p>Phone</p>
            <p>+63 969 328 6947</p>
          </div>
          <div className="border-b-1 flex justify-between py-2">
            <p>Location</p>
            <p>Dasmariñas, Cavite, Philippines 4114</p>
          </div>
        </div>
        <div className="mt-20 flex justify-between items-end md:mb-16">
          <div>
            <h1 className="">© 2025 Johann Bleza</h1>
            <h1 className="">All rights reserved.</h1>
          </div>
          <div className="bg-stone-300 rounded-full size-20 text-stone-900 flex justify-center items-center">
            <ArrowUp className="size-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
