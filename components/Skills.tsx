"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Skills = () => {
  useGSAP(() => {
    const skills = SplitText.create(".skills", {
      type: "lines",
      mask: "lines",
    });
    const tech = SplitText.create(".tech", {
      type: "lines",
      mask: "lines",
    });
    const tech2 = SplitText.create(".tech2", {
      type: "lines",
      mask: "lines",
    });

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 800px)",
        isMobile: "(max-width: 799px)",
      },
      (context) => {
        const isDesktop = context.conditions?.isDesktop;

        gsap.from(skills.lines, {
          y: isDesktop ? 200 : 100,
          stagger: 0.05,
          scrollTrigger: {
            start: 400,
            end: 800,
            scrub: 2,
          },
        });
        gsap.from(tech.lines, {
          y: isDesktop ? 200 : 100,
          stagger: 0.1,
          scrollTrigger: {
            start: 700,
            end: isDesktop ? 1400 : 900,
            scrub: isDesktop ? 4 : 3,
          },
        });
        gsap.from(tech2.lines, {
          y: isDesktop ? 200 : 100,
          stagger: 0.1,
          scrollTrigger: {
            start: 700,
            end: isDesktop ? 1400 : 900,
            scrub: isDesktop ? 4 : 3,
          },
        });
      },
    );
  }, []);
  return (
    <main
      className="min-h-dvh p-4  flex flex-col gap-20 my-16 text-white"
      id="skills"
    >
      <section className="flex flex-col justify-center items-center xl:w-[80%] mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-[6vw] font-semibold  tracking-tight skills text-center">
          About Me
        </h1>
        <p className="text-justify text-stone-200 md:text-xl skills">
          I am Johann Sealtiel Bleza, a web developer based in the Philippines.
          I started out coding through a coding bootcamp and work my way from
          there. I discovered my passion through coding as I love to build
          beautiful and interactive apps.
        </p>
      </section>
      <section className="flex flex-col gap-12  xl:w-[80%] mx-auto justify-between">
        <div className="">
          <h1 className="text-5xl sm:text-6xl lg:text-[5vw] font-semibold  tracking-tight skills">
            Skills
          </h1>
          <p className="text-justify text-stone-200 md:text-xl skills">
            I am a full stack developer that specialized in the front-end and
            leverages BaaS to rapidly build scalable and extensive apps.
          </p>
        </div>
        <div className="text-[12vw] font-bold text-white leading-[10vw] text-end tracking-tight lg:text-[7vw] lg:leading-[6vw] skills">
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
          <h1 className="text-5xl sm:text-6xl lg:text-[5vw] font-semibold tracking-tight tech">
            Tech Stack
          </h1>
          <p className="text-justify text-stone-200 md:text-xl tech tech">
            My go to tech stack for web and mobile devlopment.
          </p>
        </div>
        <div className="flex text-[7.4vw] tracking-tight font-bold leading-[7vw] justify-between lg:text-[6vw] lg:leading-[5vw]">
          <div className="text-stone-200 lg:text-start tech">
            <h1>HTML</h1>
            <h1>CSS</h1>
            <h1>TAILWIND</h1>
            <h1>JAVASCRIPT</h1>
            <h1>TYPESCRIPT</h1>
            <h1>REACT</h1>
            <h1>NODE.JS</h1>
            <h1>NEXT.JS</h1>
            <h1>ANGULAR</h1>
            <h1>REACT NATIVE</h1>
          </div>
          <div className="text-stone-300  text-end tech2">
            <h1>FLUTTER</h1>
            <h1>SUPABASE</h1>
            <h1>FIREBASE</h1>
            <h1>PYTHON</h1>
            <h1>STREAMLIT</h1>
            <h1>JAVA</h1>
            <h1>SPRING BOOT</h1>
            <h1>DOCKER</h1>
            <h1>GIT</h1>
            <h1>SQL</h1>{" "}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
