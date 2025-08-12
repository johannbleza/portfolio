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
      className="min-h-dvh p-4  flex flex-col gap-20 pt-16 mb-40 text-white"
      id="skills"
    >
      <section className="flex flex-col justify-center items-center xl:max-w-[80%] mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-[6vw] font-semibold  tracking-tight skills text-center">
          About me
        </h1>
        <p className="text-justify text-stone-200 md:text-xl skills">
          Hi there! I&apos;m Johann Sealtiel Bleza, a web developer from the
          Philippines with a deep-rooted passion for all things in tech. My
          journey began at a coding bootcamp, where I discovered my love for
          building things on the web and mobile. Now, I&apos;m dedicated to
          turning that passion into practical, creative solutions.
        </p>
      </section>
      <section className="flex flex-col gap-12  xl:max-w-[80%] mx-auto justify-between">
        <div className="">
          <h1 className="text-5xl sm:text-6xl lg:text-[5vw] font-semibold  tracking-tight skills">
            Services
          </h1>
          <p className="text-justify text-stone-200 md:text-xl skills">
            I&apos;m a full-stack developer specializing in front-end
            development, with a knack for building scalable and robust
            applications by leveraging powerful cloud-based backend services.
          </p>
        </div>
        <div className="text-[13vw] font-bold text-white leading-[10vw] text-end tracking-tight lg:text-[7vw] lg:leading-[6vw] skills">
          <h1 className="lg:hidden">WEB DEV</h1>
          <h1 className="hidden lg:block">WEB DEVELOPMENT</h1>
          <h1 className="lg:hidden">MOBILE APP</h1>
          <h1 className="hidden lg:block">MOBILE APP DEV</h1>
          <h1>FRONT-END</h1>
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
            My go to tech stack for web and mobile development in 2025.
          </p>
        </div>
        <div className="flex text-[7vw] tracking-tight font-bold leading-[7vw] justify-between lg:text-[6vw] lg:leading-[5vw]">
          <div className="text-stone-200 lg:text-start tech">
            <h1>HTML</h1>
            <h1>CSS</h1>
            <h1>TAILWIND</h1>
            <h1>JAVASCRIPT</h1>
            <h1>TYPESCRIPT</h1>
            <h1>REACT</h1>
            <h1>NODE.JS</h1>
            <h1>NEXT.JS</h1>
          </div>
          <div className="text-stone-300  text-end tech2">
            <h1>FLUTTER</h1>
            <h1>SUPABASE</h1>
            <h1>FIREBASE</h1>
            <h1>PYTHON</h1>
            <h1>STREAMLIT</h1>
            <h1>FIGMA</h1>
            <h1>GIT</h1>
            <h1>SQL</h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
