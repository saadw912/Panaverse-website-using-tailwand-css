import Heading from "./Heading";
import React from 'react';

const items = [
    { text: 'Creative Works' }
  ];
  export default function Work(){
    return(
        <div className=" bg-slate-100">
        <section className="container mx-auto py-10 px-4">
         <React.Fragment>
    {items.map(({ text }) => (
      <Heading key={text} Heading={text} />
    ))}
  </React.Fragment>
  <div className="grid grid-cols-3 gap-8">
    <div className="row-span-2 relative group">
        <img src="creative3.jpeg" alt="" />
        <div className="bg-[#000000bd] absolute w-[56%] h-[100%] top-0 opacity-0 
        transition duration-500 group-hover:opacity-100 grid place-items-center
         text-white">Project Title</div>
    </div>
    <div className="row-span-2 relative group">
        <img src="creative3.jpeg" alt="" />
        <div className="bg-[#000000bd] absolute w-[56%] h-[100%] top-0 opacity-0 
        transition duration-500 group-hover:opacity-100 grid place-items-center
         text-white">Project Title</div>
    </div>
    <div className="row-span-2 relative group">
        <img src="creative3.jpeg" alt="" />
        <div className="bg-[#000000bd] absolute w-[56%] h-[100%] top-0 opacity-0 
        transition duration-500 group-hover:opacity-100 grid place-items-center
         text-white">Project Title</div>
    </div>
    <div className="row-span-2 relative group">
        <img src="creative3.jpeg" alt="" />
        <div className="bg-[#000000bd] absolute w-[56%] h-[100%] top-0 opacity-0 
        transition duration-500 group-hover:opacity-100 grid place-items-center
         text-white">Project Title</div>
    </div>
    <div className="row-span-2 relative group">
        <img src="creative3.jpeg" alt="" />
        <div className="bg-[#000000bd] absolute w-[56%] h-[100%] top-0 opacity-0 
        transition duration-500 group-hover:opacity-100 grid place-items-center
         text-white">Project Title</div>
    </div>
    <div className="row-span-2 relative group">
        <img src="creative3.jpeg" alt="" />
        <div className="bg-[#000000bd] absolute w-[56%] h-[100%] top-0 opacity-0 
        transition duration-500 group-hover:opacity-100 grid place-items-center
         text-white">Project Title</div>
    </div>

  </div>
  </section>
  </div>
    );
  }