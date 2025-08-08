"use client";
import { projects } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);
const Projects = () => {
  const gridRef = useRef(null);

  useGSAP(() => {
    const split = SplitText.create(".projects-text", {
      type: "lines",
      mask: "lines",
    });

    const mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: "(min-width: 600px)",
        isLargeDesktop: "(min-width: 1600px)",
        isMobile: "(max-width: 799px)",
      },
      (context) => {
        const isDesktop = context.conditions?.isDesktop;
        const isLargeDesktop = context.conditions?.isLargeDesktop;
        gsap.to("#projects", {
          y: "-100dvh",
          ease: "power1.inOut",
          scrollTrigger: {
            scrub: 2,
            start: isLargeDesktop ? 2200 : isDesktop ? 1800 : 1000,
            // snap: isDesktop ? 0.1 : 0.5,
          },
        });

        gsap.from(split.lines, {
          y: 100,
          stagger: 0.5,
          scrollTrigger: {
            start: isDesktop ? 2000 : 1400,
            end: isDesktop ? 2200 : 1600,
            scrub: 2,
          },
        });
        if (gridRef.current) {
          gsap.from(
            (gridRef.current as HTMLElement).children,
            isDesktop
              ? {
                  height: 0,
                  transformOrigin: "bottom",
                  opacity: 0,
                  delay: 0.5,
                  duration: 1,
                  stagger: 0.5,
                  scrollTrigger: {
                    trigger: "#projects-container",
                    toggleActions: "restart play play reset",
                  },
                }
              : {
                  width: 0,
                  transformOrigin: "bottom",
                  opacity: 0,
                  delay: 0.5,
                  duration: 1,
                  stagger: 0.5,
                  scrollTrigger: {
                    trigger: "#projects-container",
                    toggleActions: "restart pause pause reset",
                  },
                },
          );
        }
      },
    );
  }, []);
  return (
    <div>
      <div
        className="bg-black text-stone-200 pt-20 pb-60 p-4 flex flex-col gap-6"
        id="projects"
      >
        <div className="lg:w-[80%] lg:mx-auto flex flex-col gap-8">
          <div className="flex">
            <h1
              className="text-6xl md:text-8xl font-bold projects-text"
              id="project-title"
            >
              Projects
            </h1>
            <p className="text-2xl md:text-4xl font-semibold projects-text">
              (7)
            </p>
          </div>
          <div
            className="grid grid-cols-4 grid-rows-12 gap-4 h-dvh lg:h-[150dvh]"
            ref={gridRef}
            id="projects-container"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                img={project.img}
                className={project.className}
                desc={project.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
