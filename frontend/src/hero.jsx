import { useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
export default function Hero() {

  return (
    <div className="h-screen flex flex-col justify-center bg-gray-50 px-4 text-left items-center w-full">
      <div className="h-24 w-24 relative md:right-96 overflow-hidden hidden md:block">
        <div className="h-40 w-40 bg-gradient-to-bl from-blue-500 to-blue-950 animate-pulse rounded"></div>
      </div>

      <div className="gap-8 flex flex-col text-black">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gray-400 mr-2">{'01'}</span><span className="text-gray-400 mr-2">{'<'}</span>
          Hello, I'm <span className="text-blue-800">Anupam Yadav!</span>
          <span className="text-gray-400 ml-2">{'>'}</span>
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
          <span className="text-gray-400 mr-2">{'02'}</span><span className="text-gray-400 mr-2">{'<'}</span>
          <span className="text-pink-800">A FullStack Developer</span>
          <span className="text-gray-400 ml-2">{'>'}</span>
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gray-400 mr-2">{'03'}</span><span className="text-gray-400 mr-2">{'<'}</span>
          <span className="text-blue-400">And AI Enthusiast</span>
          <span className="text-gray-400 ml-2">{'>'}</span>
        </h1>
        <p className="text-lg md:text-3xl text-gray-600 mb-8 text-center ">
          Welcome to my Portfolio
        </p>
        {/* <button className="bg-blue-800 text-white rounded px-4 py-3 hover:bg-blue-900 hover:shadow-lg  animate-bounce mx-auto "><span className="flex items-center justify-center"><span>Know more</span><MdKeyboardDoubleArrowDown className="animate-bounce"/></span></button> */}
      </div>
    </div>
  );
}