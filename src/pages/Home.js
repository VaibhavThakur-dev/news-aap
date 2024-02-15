import React from "react";

import News from "../component/News";

function Home() {
  return (
    <>
      <div className="relative bg-zinc-800 h-screen w-full  ">
        <div className="absolute z-0 w-full h-full">
          <h1 className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 font-semibold text-5xl sm:text-6xl md:text-9xl leading-none tracking-tighter">
            Fast<span className="text-[#caca33]">News.</span>com
          </h1>
        </div>
        <div className="absolute  top-0 left-0 z-[2] w-full h-full  ">
          <News />
        </div>
      </div>
    </>
  );
}

export default Home;
