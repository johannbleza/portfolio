import Hero from "@/components/Hero";

const page = () => {
  return (
    <div className="w-dvw max-h-dvh">
      <Hero />
      <Hero />

      <div className="noise w-full h-full z-50 " id="noise-filter" />
    </div>
  );
};

export default page;
