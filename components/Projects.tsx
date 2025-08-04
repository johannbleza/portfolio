"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

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
          y: -800,
          ease: "none",
          scrollTrigger: {
            scrub: 4,
            start: isDesktop ? 1800 : 1000,
          },
        });
      },
    );
  }, []);
  return (
    <div className="-mt-12 bg-black h-[90vh]">
      <div
        className="bg-black text-stone-200 py-20 p-4 flex flex-col gap-6 rounded-4xl"
        id="projects"
      >
        <div className="lg:w-[80%] lg:mx-auto flex flex-col gap-6 ">
          <h1 className="text-6xl md:text-8xl font-bold">Projects</h1>
          <div className="grid grid-cols-4 grid-rows-9 gap-4 h-[90vh] lg:h-dvh ">
            <div className="col-span-2 row-span-5  bg-stone-900 relative">
              <Image
                src="/project1.png"
                alt="project1"
                fill={true}
                className="object-cover grayscale- hover:grayscale-0 "
              />
              <p className="absolute font-bold top-0 left-1 text-xl">
                Daily Grid
              </p>
            </div>
            <div className="col-span-2 row-span-3  bg-stone-900 p-4 relative">
              <Image
                src="/project2.png"
                alt="project1"
                fill={true}
                className="object-cover grayscale- hover:grayscale-0"
              />
              <p className="absolute font-bold top-0 left-1 text-xl">
                Sched Mo
              </p>
            </div>
            <div className="col-span-2 row-span-3  bg-stone-900 p-4 relative">
              <Image
                src="/project3.png"
                alt="project1"
                fill={true}
                className="object-cover grayscale- hover:grayscale-0"
              />
              <p className="absolute font-bold top-0 left-1 text-xl">
                Statsify
              </p>
            </div>
            <div className="col-span-2 row-span-4  bg-stone-900 p-4 relative">
              <Image
                src="/project4.png"
                alt="project1"
                fill={true}
                className="object-cover grayscale- hover:grayscale-0"
              />
              <p className="absolute font-bold top-0 left-1 text-xl">
                Let Me Cook
              </p>
            </div>
            <div className="col-span-2 row-span-3  bg-stone-900 p-4 relative">
              <Image
                src="/project5.png"
                alt="project1"
                fill={true}
                className="object-cover grayscale- hover:grayscale-0"
              />
              <p className="absolute font-bold top-0 left-1 text-xl">AI-NIMO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
