"use client";
import { projects } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 600px)",
        isMobile: "(max-width: 799px)",
      },
      (context) => {
        const isDesktop = context.conditions?.isDesktop;
        gsap.to("#projects", {
          y: "-100dvh",
          ease: "power1.inOut",
          scrollTrigger: {
            scrub: 2,
            start: isDesktop ? 1800 : 1000,
          },
        });
      },
    );
  }, []);
  return (
    <div>
      <div
        className="bg-black text-stone-200 pt-20 pb-40 p-4 flex flex-col gap-6"
        id="projects"
      >
        <div className="lg:w-[80%] lg:mx-auto flex flex-col gap-6 ">
          <div className="flex">
            <h1 className="text-6xl md:text-8xl font-bold">Projects</h1>
            <p className="text-2xl md:text-4xl font-semibold">(7)</p>
          </div>
          <div className="grid grid-cols-4 grid-rows-12 gap-4 h-dvh lg:h-[150dvh]">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                img={project.img}
                className={project.className}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
