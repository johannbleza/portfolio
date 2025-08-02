import About from "@/components/About";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Skills from "@/components/Skills";

const Page = () => {
  return (
    <div className="relative bg-stone-200 text-stone-700 tracking-tighter">
      <Loader />
      <div className="overflow-hidden">
        <Hero />
        <Skills />
      </div>
      <About />
      <About />
      <About />
      <About />
      <div className="absolute inset-0 opacity-80 noisy w-full h-full z-50 pointer-events-none" />
    </div>
  );
};

export default Page;
