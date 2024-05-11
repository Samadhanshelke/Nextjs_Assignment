import React from "react";
import Image from "next/image";
import step1 from "../Images/step1.svg";
import step2 from "../Images/step2.svg";
import step3 from "../Images/step3.svg";
import msg1 from '../Images/msg1.svg'
import msg2 from '../Images/msg2.svg'
import data from "../utils/data";
function Hero() {
  return (
    <div className='w-full overflow-x-scroll flex sm:flex-col gap-y-8 gap-x-8 sm:h-[70vh] sm:overflow-x-hidden scroll-container' >
      {data.map((item) => {
        return (
          <div key={item.id} className="min-w-full flex flex-col sm:flex-row gap-y-4  items-center justify-center gap-x-8 scroll-item">
          {
            item.id === 1 
            ? <Image src={step1} width={400} height={300} className="w-[300px] sm:w-[400px] " alt="hero1"/>
            : item.id === 2
            ? <span className="relative ">
               <Image src={step2} width={400} height={300} className="w-[300px] sm:w-[400px] me-2"  alt="hero2"/>
               <Image src={msg1}  width={400} height={300} className="top-[40%] left-[47%] absolute  w-[160px]"  alt="hero2"/>
               <Image src={msg2} width={400} height={300} className="top-[60%] right-[45%] absolute w-[160px] "  alt="hero2"/>
                   
            </span>
            : <Image src={step3} width={400} height={300} className="w-[300px] sm:w-[400px]"  alt="hero3"/>

          }
          <div className=" sm:w-[40%] mx-4 bg-white p-6 rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <h3 className="text-3xl font-bold mb-2">
                Step<i className="text-clips">{item.id}:</i> {item.title}
              </h3>
              <span className="text-xl sm:text-sm font-semibold">
                {item.description}
              </span>
            </div>
           
           
        
          </div>
        );
      })}
    </div>
  );
}

export default Hero;
