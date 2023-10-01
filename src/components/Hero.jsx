import React from 'react';
import { Programador, Shrumalini, nivel } from "../images";
import AnimatedNumber from "./Achievements";

const Hero = () => {
  return (
    <section className="relative mt-4 md:mt-10 h-screen mb-40">
      <div className="w-full lg:h-[350px] sm:h-screen flex justify-center">
        <div id="bgnd" className="bg-gradient-to-r from-bmarin-transparent to-bmarin-transparent my-10 absolute w-5/6 flex flex-col lg:flex-row justify-center lg:justify-between gap-5 items-center p-8">

          {/* Imagen */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <img
              src={Shrumalini}
              alt="Profile Image"
              className="cursor-pointer mx-auto w-[200px] h-[200px]"
            />
          </div>

          {/* Texto superior en dispositivos móviles */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-[#fff] text-[32px] mt-0 font-fredoka">Lucas Albornoz</h1>
            <p className="text-[#fff] font-nunito text-[20px]">Full-stack developer</p>
            <p className="py-4 text-[#fff] font-nunito">The beautiful art of combining videogames with programming.</p>
          </div>

          {/* Nivel e Insignia */}
          <div className="w-full lg:w-1/4 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-[#fff] text-[22px]">Nivel</h1>
              <img
                src={nivel}
                alt="lv"
                className="mt-2 w-[50px] h-[50px]"
              />
            </div>

            <div className="flex items-center my-2 bg-custom1 p-4">
              <img
                src={Programador}
                alt="badge"
                className="mr-4 w-[50px] h-[50px]"
              />
              <div>
                <h1 className="text-[#fff]">Programmer</h1>
                <p className="text-[#fff]">100 EXP</p>
              </div>
            </div>

            <a href="src/assets/CV.pdf" download="CV.pdf">
              <button
                className="my-5 py-2 px-4 border rounded-lg text-[#fff] self-center lg:self-start">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
      <AnimatedNumber />
    </section>
  );
};

export default Hero;
