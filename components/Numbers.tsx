"use client"
import { Parallax } from "react-scroll-parallax";


export default function Numbers(){
    return <div className="w-full h-[60vh] flex justify-evenly items-center">
      <Parallax speed={5}>
    <div className="w-60 h-60 p-5 flex justify-center items-center border-amber-700">
      <div className="felx flex-col justify-center hover:border-b-8 hover:border-amber-400 text-6xl font-extrabold duration-200">
        <p className="text-center text-white">12+</p>
        <p className="text-center text-orange-600">Theme</p>
        
      </div>
    </div>
    </Parallax>
    <Parallax speed={-5}>
    <div className="w-60 h-60 p-5 flex justify-center items-center border-amber-700">
      <div className="felx flex-col justify-center hover:border-b-8 hover:border-amber-400 text-6xl font-extrabold duration-300">
        <p className="text-center text-white">24+</p>
        <p className="text-center text-orange-600">Hours</p>
        
      </div>
    </div>
    </Parallax>
    <Parallax speed={5}>
    <div className="w-60 h-60 p-5 flex justify-center items-center border-amber-700">
      <div className="felx flex-col justify-center hover:border-b-8 hover:border-amber-400 text-6xl font-extrabold duration-200">
        <p className="text-center text-white">150+</p>
        <p className="text-center text-orange-600">Projects</p>
        
      </div>
    </div>
    </Parallax>
  </div>
}