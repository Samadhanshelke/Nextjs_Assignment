import React from "react";
import Image from "next/image";
import step1 from "../Images/step1.svg";
import step2 from "../Images/step2.svg";
import step3 from "../Images/step3.svg";
import data from "../utils/data";
function Hero() {
  return (
    <div className='sm:h-[70vh] h-full w-full min-w-[200px] sm:w-full overflow-x-scroll sm:overflow-x-hidden flex flex-row sm:flex-col gap-x-8  sm:gap-y-8 p-8  sm:overflow-y-scroll' >
      {data.map((item) => {
        return (
          <div className="flex min-w-[1000px] sm:min-w-full p-6 sm:p-0  justify-between flex-col gap-y-8 items-center sm:flex-row m-auto  ">
          {
            item.id === 1 
            ? <Image src={step1} width={400} height={300} className="w-[8000px] sm:w-[356px]"/>
            : item.id === 2
            ?<Image src={step2} width={400} height={300} className="w-[8000px] sm:w-[400px]"/>
            : <Image src={step3} width={400} height={300} className="w-[8000px] sm:w-[400px]"/>

          }
           
            <div className="max-w-[600px] sm:w-[40%]  bg-white p-6 rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <h3 className="text-6xl sm:text-3xl font-bold mb-2">
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
