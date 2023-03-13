import Heading from "./Heading";
import React from 'react';


const items = [
    { text: 'Skills' }
  ];
  export default function Skills(){
    return(
        <section className="container mx-auto py-10 px-4">
         <React.Fragment>
    {items.map(({ text }) => (
      <Heading key={text} Heading={text} />
    ))}
  </React.Fragment>
  <p className="text-grey-600 -mt-10 mb-10">
  I believe in Software Quality that is essential to deliver
   the product on time and on the required quality.
   I always plan the Project Development schedule for
    deploying the Project on time with all completed requirements.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
        <p>Wordpress</p>
        <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4041] absolute h-[4px] w-[90%]"></div>
        </div>
    </div>
    <div>
        <p>HTML</p>
        <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4041] absolute h-[4px] w-[95%]"></div>
        </div>
    </div>
    <div>
        <p>CSS</p>
        <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4041] absolute h-[4px] w-[88%]"></div>
        </div>
    </div>
    <div>
        <p>JavaScript</p>
        <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4041] absolute h-[4px] w-[70%]"></div>
        </div>
    </div>
    <div>
        <p>Next js</p>
        <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4041] absolute h-[4px] w-[50%]"></div>
        </div>
    </div>
    <div>
        <p>TypeScript</p>
        <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4041] absolute h-[4px] w-[55%]"></div>
        </div>
    </div>

  </div>

        </section>
    );
  }