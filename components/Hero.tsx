"use client";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import TextScroll from "./TextScroll";
import SlideUp from "./SlideUp";

const Hero = () => {
  return (
    <main className="h-dvh relative flex justify-center text-center bg-stone-200 text-stone-800 overflow-hidden">
      <div className="flex justify-between items-center absolute top-0 w-full p-6 text-lg ">
        {/* <p className="font-bold text-stone-500">BLEZA.DEV</p> */}
        {/* <div className="flex gap-10"> */}
        {/*   <p id="works">WORKS</p> */}
        {/*   <p>ABOUT</p> */}
        {/*   <p>CONTACT</p> */}
        {/* </div> */}
      </div>
      <div className="text-center absolute top-[6vh] w-full flex flex-col justify-end">
        <h1 className="font-medium text-[14vw] mb-[-10%] tracking-tight z-1">
          JOHANN BLEZA
        </h1>
        <TextScroll />
        {/* <ArrowDownRight */}
        {/*   className="self-end mt-[-13vh] mr-0 text-stone-500 size-[30vh]" */}
        {/*   size={200} */}
        {/*   absoluteStrokeWidth */}
        {/* /> */}
      </div>
      <div className="absolute top-[22vw] hover:scale-110 hover:top-[16vw] hover:z-50 ease-in-out duration-500  h-[55vh] w-[45vh]">
        <Image
          src="/profile3.gif"
          fill={true}
          alt="profile"
          className="object-cover "
        />
      </div>
      <div className="flex flex-col absolute bottom-[24vh] left-[12vw] text-start text-[2vh] text-stone-800">
        <p>UI/UX DESIGN</p>
        <p>FRONT-END DEVELOPER</p>
        <p>WEB DEVELOPMENT</p>
      </div>
      {/* <div className="size-[20vh] rounded-full text-stone-100 bg-stone-800/40 absolute flex items-center justify-center bottom-[24%] right-[22vw]"> */}
      {/*   <p className="text-start w-20 text-[1.5vh]">AVAILABLE FOR WORK</p> */}
      {/* </div> */}
      {/* <div className="absolute bottom-4 right-[-500px] flex flex-col items-start  hover:right-4 ease-in-out duration-500"> */}
      {/*   <p className="text-stone-500 text-2xl ">LOCATED IN THE</p> */}
      {/*   <h1 className="text-[16vh] mt-[-6vh] font-bold text-stone-100 tracking-tighter"> */}
      {/*     {" "} */}
      {/*     PHILIPPINES */}
      {/*   </h1> */}
      {/* </div> */}
      <div className="noise w-full h-full z-50 " id="noise-filter" />
    </main>
  );
};

export default Hero;
