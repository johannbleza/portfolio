"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    gsap.to("#skills", {
      y: -250,
      duration: 1,
      scrollTrigger: {
        scrub: true,
      },
    });
    gsap.to("#tech", {
      y: -100,
      duration: 1,
      scrollTrigger: {
        scrub: true,
      },
    });
  }, []);
  return (
    <main className="min-h-dvh p-4  flex flex-col gap-20 mt-20 text-white">
      <section
        className="flex flex-col gap-12  xl:w-[80%] mx-auto justify-between"
        id="skills"
      >
        <div className="">
          <h1 className="text-5xl lg:text-[5vw] font-semibold  tracking-tighter">
            Skills
          </h1>
          <p className="text-justify text-stone-200 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet
            consectetur adipiscing elit quisque faucibus ex sapien. Quisque
          </p>
        </div>
        <div className="text-[12vw] font-bold text-white leading-[10vw] text-end tracking-tighter lg:text-[7vw] lg:leading-[6vw] ">
          <h1 className="lg:hidden">WEB DEV</h1>
          <h1 className="hidden lg:block">WEB DEVEVELOPMENT</h1>
          <h1>FRONT-END</h1>
          <h1>UI/UX DESIGN</h1>
        </div>
      </section>
      <section
        className="flex flex-col gap-12 xl:w-[80%] mx-auto justify-between "
        id="tech"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-5xl lg:text-[5vw] font-semibold tracking-tighter">
            Tech Stack
          </h1>
          <p className="text-justify text-stone-200 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet
            consectetur adipiscing elit quisque faucibus ex sapien. Quisque
          </p>
        </div>
        <div className="flex text-[7.5vw] tracking-tighter font-bold leading-[7vw] justify-between lg:text-[6vw] lg:leading-[5vw]">
          <div className="text-stone-100 lg:text-start">
            <h1>HTML</h1>
            <h1>CSS</h1>
            <h1>TAILWIND</h1>
            <h1>JAVASCRIPT</h1>
            <h1>TYPESCRIPT</h1>
            <h1>REACT</h1>
            <h1>NODE.JS</h1>
            <h1>NEXT.JS</h1>
            <h1>ANGULAR</h1>
          </div>
          <div className="text-stone-200  text-end ">
            <h1>REACT NATIVE</h1>
            <h1>FLUTTER</h1>
            <h1>SUPABASE</h1>
            <h1>FIREBASE</h1>
            <h1>JAVA</h1>
            <h1>SPRING BOOT</h1>
            <h1>DOCKER</h1>
            <h1>GIT</h1>
            <h1>SQL</h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
