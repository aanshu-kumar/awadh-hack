"use client";
"use client";
import AboutHack from "@/components/AboutHack";
import AboutUs from "@/components/AboutUs";
import { Footer } from "@/components/footer";
import Header from "@/components/Header";
import Numbers from "@/components/Numbers";
import Sponsers from "@/components/Sponser"
import Theme from "@/components/Theme";
import Faqs from "@/components/Faqs";
import { Parallax } from "react-scroll-parallax";
import React from "react";
import Crew from "@/components/Crew";

export default function Home() {
  return (
    <div className="bg-slate-900">
      <Header></Header>

      <div className="relative md:m-20 my-20" id="about">
        <h2 className="text-9xl text-center text-slate-800 capitalize">
          ABOUT US
        </h2>
        <h2 className="md:text-7xl text-4xl text-white absolute bottom-0 md:left-[40%] left-[35%]">
          about us
        </h2>
      </div>
      <AboutUs></AboutUs>
      <div className="relative md:m-20 my-20">
        <h2 className="text-9xl text-center text-slate-800 capitalize sticky">
          WHAT?
        </h2>
        <h2 className="md:text-7xl text-4xl text-white absolute bottom-0 md:left-[20%] left-[10%]">
          What is Awadh-Hack?
        </h2>
      </div>
      <AboutHack></AboutHack>

      <Numbers></Numbers>
      <Parallax scale={[1, 1.5]}>
        <div className="relative md:m-20 my-20" id="theme">
          <h2 className="text-9xl text-center text-slate-800 capitalize sticky">
            THEME
          </h2>
          <h2 className="md:text-7xl text-4xl text-white absolute bottom-0 md:left-[40%] left-[35%]">
            theme
          </h2>
        </div>
      </Parallax>
      <Theme></Theme>
      <Parallax scale={[1, 1.2]}>
      <div className="relative m-20" id="crew">
        <h2 className="text-9xl text-center text-slate-800 capitalize sticky">
          CREW
        </h2>
        <h2 className="md:text-7xl text-4xl text-center text-white absolute bottom-0 left-[40%]">
          crew
        </h2>
      </div>
      </Parallax>
      <Crew />
      <div className="relative md:m-20 my-20" id="sponsor">
        <h2 className="md:text-9xl text-8xl text-center text-slate-800 capitalize sticky">
          SPONSORS
        </h2>
        <h2 className="md:text-7xl text-4xl text-white absolute bottom-0 md:left-[40%] left-[35%]">
          sponsors
        </h2>
      </div>
      {/* <Sponsers /> */}
      <div className="w-full bg-slate-500 bg-opacity-20">
        <a href="mailto:awadhhacks@gmail.com">
          <h2 className="text-3xl text-amber-400 text-center cursor-pointer">
            Sponsor us
          </h2>
        </a>
      </div>
      <div className="relative md:m-20 my-20">
        <h2 className="text-9xl text-center text-slate-800 capitalize sticky">
          FAQs
        </h2>
        <h2 className="md:text-7xl text-4xl text-white absolute bottom-0 md:left-[45%] left-[40%]">
          faqs
        </h2>
      </div>
      <Faqs></Faqs>
      <Footer></Footer>
    </div>
  );
}
