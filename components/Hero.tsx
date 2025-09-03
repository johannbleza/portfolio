"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import { loaderDelay } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

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

    const split = SplitText.create("#name", {
      type: "chars,lines",
      mask: "lines",
    });
    const sub = SplitText.create(".sub", { type: "lines", mask: "lines" });

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 800px)",
        isMobile: "(max-width: 799px)",
      },
      (context) => {
        const isDesktop = context.conditions?.isDesktop;

        gsap.to(window, { scrollTo: 0, duration: 0.1 });
        gsap.to(split.lines, {
          y: 200,
          scrollTrigger: {
            scrub: 1,
            end: 400,
          },
        });

        // gsap.to("#hero", {
        //   backgroundColor: "#0c0a09",
        //   scrollTrigger: {
        //     scrub: 2,
        //     end: 400,
        //   },
        // });
        // gsap.to("#skills", {
        //   backgroundColor: "#0c0a09",
        //   scrollTrigger: {
        //     scrub: 2,
        //     end: 400,
        //   },
        // });

        gsap.from(sub.lines, {
          y: 100,
          stagger: 0.05,
          delay: loaderDelay + 1,
        });

        gsap.to(".hero", {
          opacity: 0,
          scrollTrigger: {
            scrub: 1,
            end: 200,
          },
        });

        gsap.from("#profile", {
          height: 0,
          duration: 1,
          delay: loaderDelay + 0.5,
        });

        gsap.fromTo(
          "#profile",
          { filter: "brightness(100%)" },
          {
            filter: "brightness(50%)",
            scale: 5,
            y: isDesktop ? "140dvh" : "115vh",
            scrollTrigger: {
              // pin: true,
              end: 400,
              scrub: 2,
            },
          }
        );
        gsap.from(split.chars, {
          y: isDesktop ? 200 : 100,
          delay: loaderDelay + 0.5,
          stagger: {
            amount: 0.5,
            from: "start",
          },

          ease: "power2",
        });
      }
    );
  }, []);
  return (
    <main
      className="relative min-h-dvh flex flex-col justify-between p-4"
      id="hero"
    >
      <nav className=" flex justify-between items-start text-xl hero" id="nav">
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
          <a href="#" className="sub">
            Home
          </a>
          <button
            onClick={() =>
              gsap.to(window, {
                duration: 0.5,
                scrollTo: "#skills",
              })
            }
            className="sub cursor-pointer"
          >
            <p className="">About</p>
          </button>
          <p
            onClick={() => {
              const mm = gsap.matchMedia();

              mm.add(
                {
                  isDesktop: "(min-width: 500px)",
                  isMobile: "(max-width: 799px)",
                },

                (context) => {
                  const isDesktop = context.conditions?.isDesktop;
                  gsap.to(window, {
                    duration: 0.5,
                    scrollTo: {
                      y: "#projects",
                      offsetY: isDesktop
                        ? window.innerHeight * 0.25
                        : window.innerHeight * 0.45,
                    },
                  });
                }
              );
            }}
            className="sub cursor-pointer"
          >
            Projects
          </p>
          <button
            className="sub"
            onClick={() =>
              gsap.to(window, {
                duration: 0.5,
                scrollTo: "max",
              })
            }
          >
            Contact
          </button>
        </div>
      </nav>
      <div className="lg:absolute top-[16vh] lg:text-center">
        <div className="leading-[11vw]  flex flex-col hero">
          <h1
            className="text-[13vw] md:text-[14vw] font-bold tracking-tighter text-stone-800"
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
            className="relative w-[55vw] h-[40vh] lg:absolute lg:w-[25vw]  sm:h-[50vh] lg:-top-20 2xl:-top-30 "
            id="profile"
          >
            <Image
              priority={true}
              src="/profile3.gif"
              fill={true}
              alt="profile"
              unoptimized
              className="object-cover"
            />
          </div>
          <div
            className="text-sm sm:text-md lg:absolute right-50 top-20  md:text-xl hero sub"
            id="info"
          >
            <p>Full Stack Developer</p>
            <p>Web Designer</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
