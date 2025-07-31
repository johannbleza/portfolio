"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  let xPercent = 0;
  let direction = -1;
  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);

    xPercent += 0.1 * direction;
  };

  useGSAP(() => {
    if (secondText.current) {
      gsap.set(secondText.current, {
        left: secondText.current.getBoundingClientRect().width,
      });
    }
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
    });

    requestAnimationFrame(animate);

    gsap.to("#name", {
      y: -300,
      scrollTrigger: {
        scrub: true,
      },
    });
    gsap.to("#nav", {
      y: -400,
      scrollTrigger: {
        scrub: true,
      },
    });
    gsap.to("#title", {
      y: -200,
      scrollTrigger: {
        scrub: true,
      },
    });
    gsap.to("#info", {
      y: -50,
      scrollTrigger: {
        scrub: true,
      },
    });

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 800px)",
        isMobile: "(max-width: 799px)",
      },
      (context) => {
        const isDesktop = context.conditions?.isDesktop;

        gsap.to("#profile", {
          scale: 4.5,
          y: isDesktop ? 800 : 400,
          scrollTrigger: {
            // pin: true,
            end: 800,
            scrub: 1,
          },
        });
      },
    );
  }, []);
  return (
    <main className="relative min-h-dvh flex flex-col justify-between p-4">
      <nav className=" flex justify-between items-start text-xl" id="nav">
        <div className="flex gap-2 items-center font-bold tracking-tighter">
          bleza.dev
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
        <div className="leading-[10vw] mb-2 flex flex-col">
          <h1
            className="text-[13vw] md:text-[14vw] font-bold tracking-tighter"
            id="name"
          >
            JOHANN BLEZA
          </h1>
          <div
            className="text-[10vw] text-stone-50 font-semibold relative flex whitespace-nowrap w-[calc(100dvw-16px*2)] overflow-hidden"
            ref={slider}
            id="title"
          >
            <p ref={firstText}>SOFTWARE ENGINEER -&nbsp;</p>
            <p ref={secondText}>SOFTWARE ENGINEER -&nbsp;</p>
          </div>
        </div>
        <div className="relative flex gap-2 justify-between text-end items-end lg:justify-center">
          <div
            className="w-[50vw]  lg:absolute lg:w-[40vh] lg:-top-20 2xl:-top-30"
            id="profile"
          >
            <Image
              priority={true}
              src="/profile3.gif"
              // fill={true}
              height={800}
              width={800}
              alt="profile"
              className="object-cover"
            />
          </div>
          <div
            className="text-sm sm:text-md lg:absolute right-50 top-20  md:text-xl"
            id="info"
          >
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
