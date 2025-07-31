"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  ArrowDownLeft,
  ArrowDownRight,
  Bug,
  TerminalIcon,
  TerminalSquare,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    // gsap.to("#name", {
    //   y: -200,
    //   scrollTrigger: {
    //     scrub: true,
    //   },
    // });
    // gsap.to("#nav", {
    //   y: -400,
    //   scrollTrigger: {
    //     markers: true,
    //     scrub: true,
    //   },
    // });
    // gsap.to("#title", { y: -100, scrollTrigger: {
    //     scrub: true,
    //   },
    // });
    // gsap.to("#profile", {
    //   y: -400,
    //   scrollTrigger: {
    //     scrub: true,
    //   },
    // });
  }, []);
  return (
    <main className="relative min-h-dvh flex flex-col justify-between p-4">
      <nav className=" flex justify-between items-start text-xl " id="nav">
        <div className="flex gap-2 items-center font-bold">
          bleza.dev
          {/* <Bug /> */}
          {/* <TerminalSquare /> */}
          <Image
            src="/spider.svg"
            width={20}
            height={20}
            className="opacity-80"
            alt="spider"
          />
        </div>
        <div className="md:flex justify-between gap-20">
          <p>Home</p>
          <p>Works</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </nav>
      <div className="lg:absolute top-[16vh] lg:text-center">
        <div className="leading-[10vw] mb-4 flex flex-col">
          <h1 className="text-[11vw] md:text-[13vw] font-bold" id="name">
            JOHANN BLEZA
          </h1>
          <marquee className="text-[9vw] text-stone-50 font-semibold">
            SOFTWARE ENGINEER SOFTWARE ENGINEER SOFTWARE ENGINEER SOFTWARE
            ENGINEER SOFTWARE ENGINEER SOFTWARE ENGINEER SOFTWARE ENGINEER
            SOFTWARE ENGINEER SOFTWARE ENGINEER SOFTWARE ENGINEER SOFTWARE
            ENGINEER SOFTWARE ENGINEER SOFTWARE ENGINEER SOFTWARE ENGINEER
            SOFTWARE ENGINEER SOFTWARE ENGINEER
          </marquee>
          {/* <ArrowDownRight className="size-20" strokeWidth={0.5} /> */}
        </div>
        <div className="relative flex gap-2 justify-between text-end items-end lg:justify-center">
          <div className="w-[50vw]  lg:absolute lg:w-[40vh] lg:-top-20 2xl:-top-30">
            <Image
              id="profile"
              priority={true}
              src="/profile3.gif"
              // fill={true}
              height={800}
              width={800}
              alt="profile"
              className="object-cover"
            />
          </div>
          <div className="text-sm sm:text-md lg:absolute right-50 top-20  md:text-xl">
            <p>UI/UX Design</p>
            <p>Front-End Developer</p>
            <p>Web Development</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
