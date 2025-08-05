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
          <div className="grid grid-cols-4 grid-rows-12 gap-4 h-dvh lg:h-[150dvh] ">
            <div className="col-span-2 row-span-5  bg-stone-900 relative">
              <Image
                src="/project1.png"
                alt="project1"
                fill={true}
                className="object-cover"
              />
              <div className="absolute  top-0 left-1">
                <h1 className="font-bold md:text-xl">Daily Grid</h1>
              </div>
            </div>
            <div className="col-span-2 row-span-3  bg-stone-900 p-4 relative">
              <Image
                src="/project2.png"
                alt="project1"
                fill={true}
                className="object-cover"
              />
              <p className="absolute font-bold top-0 left-1 md:text-xl">
                Sched Mo
              </p>
            </div>
            <div className="col-span-2 row-span-3  bg-stone-900 p-4 relative">
              <Image
                src="/project3.png"
                alt="project1"
                fill={true}
                className="object-cover"
              />
              <p className="absolute font-bold top-0 left-1 md:text-xl">
                Statsify
              </p>
            </div>
            <div className="col-span-2 row-span-4  bg-stone-900 p-4 relative">
              <Image
                src="/project4.png"
                alt="project1"
                fill={true}
                className="object-cover "
              />
              <p className="absolute font-bold top-0 left-1 md:text-xl">
                Let Me Cook
              </p>
            </div>
            <div className="col-span-2 row-span-3  bg-stone-900 p-4 relative">
              <Image
                src="/project5.png"
                alt="project1"
                fill={true}
                className="object-cover "
              />
              <p className="absolute font-bold top-0 left-1 md:text-xl">
                AI-NIMO
              </p>
            </div>
            <div className="col-span-2 row-span-3  bg-stone-900 p-4 relative">
              <Image
                src="/project6.png"
                alt="project1"
                fill={true}
                className="object-cover "
              />
              <p className="absolute font-bold top-0 left-1 md:text-xl">
                Loan Desk
              </p>
            </div>
            <div className="col-span-2 row-span-3  bg-stone-900 p-4 relative">
              <Image
                src="/project7.png"
                alt="project1"
                fill={true}
                className="object-cover "
              />
              <p className="absolute font-bold top-0 left-1 md:text-xl">
                Quiz Me
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
