import React from "react";

const SlideUp = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex relative flex-col bg-red-300 h-7 overflow-hidden">
      <div className="absolute hover:top-[-40px] right-0 bg-red-300 p-4 ">
        <div>{children}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SlideUp;
