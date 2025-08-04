import Image from "next/image";

const Projects = () => {
  return (
    <div className="min-h-dvh bg-black text-stone-200 py-20 p-4 flex flex-col gap-6">
      <div className="lg:w-[80%] lg:mx-auto flex flex-col gap-6">
        <h1 className="text-6xl md:text-8xl font-bold">Projects</h1>
        <div className="grid grid-cols-4 grid-rows-9 gap-4 h-[70vh] lg:h-dvh ">
          <div className="col-span-2 row-span-5  bg-stone-900 p-4 relative">
            <Image
              src="/project1.png"
              alt="project1"
              fill={true}
              className="object-cover grayscale hover:grayscale-0"
            />
          </div>
          <div className="col-span-2 row-span-3  bg-stone-900 p-4 relative">
            <Image
              src="/project2.png"
              alt="project1"
              fill={true}
              className="object-cover grayscale hover:grayscale-0"
            />
          </div>
          <div className="col-span-2 row-span-3  bg-stone-900 p-4 relative">
            <Image
              src="/project3.png"
              alt="project1"
              fill={true}
              className="object-cover grayscale hover:grayscale-0"
            />
          </div>
          <div className="col-span-2 row-span-4  bg-stone-900 p-4 relative">
            <Image
              src="/project4.png"
              alt="project1"
              fill={true}
              className="object-cover grayscale hover:grayscale-0"
            />
          </div>
          <div className="col-span-2 row-span-3  bg-stone-900 p-4 relative">
            <Image
              src="/project5.png"
              alt="project1"
              fill={true}
              className="object-cover grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
