import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

const page = () => {
  return (
    <div className="relative bg-stone-200 text-stone-700 tracking-tighter">
      <div className="overflow-hidden">
        <Hero />
        <Skills />
      </div>
      <About />
      <div className="absolute inset-0 opacity-80 noisy w-full h-full z-50 pointer-events-none" />
    </div>
  );
};

export default page;
