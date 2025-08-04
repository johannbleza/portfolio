const Projects = () => {
  return (
    <div className="min-h-dvh bg-black text-stone-200 py-20 p-4 flex flex-col gap-6">
      <h1 className="text-6xl font-bold">Projects</h1>
      <div className="grid grid-cols-4 gap-4 auto-cols-max">
        <div className="col-span-3 row-span-3 bg-stone-800 p-4">
          Box 1 (spans 2 columns)
        </div>
        <div className="row-span-2 cols-span-1 bg-stone-800 p-4">Box 21</div>
        <div className="bg-stone-800 p-4">Box 2</div>
        <div className="bg-stone-800 p-4">Box 3</div>
        <div className="bg-stone-800 p-4">Box 3</div>
        <div className="col-span-3 bg-stone-800 p-4">
          Box 4 (spans 3 columns)
        </div>
        <div className="bg-stone-800 p-4">Box 5</div>
      </div>
    </div>
  );
};

export default Projects;
