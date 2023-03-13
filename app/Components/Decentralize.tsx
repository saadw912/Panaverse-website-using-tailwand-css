import React from 'react';
import Heading from "./Heading";




const items = [
  { text: 'Decentralized Autonomous' }
];
export default function Decentralize() {
    return (
       <section className="container mx-auto py-10 px-4">
         <React.Fragment>
    {items.map(({ text }) => (
      <Heading key={text} Heading={text} />
    ))}
  </React.Fragment>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
  <div className="flex items-center shadow-2xl rounded-xl px-5 py-5  justify-between   border-[#243c5a] border-2 hover:border-[#B60E29]">
  <div className="chat-notification-logo-wrapper  flex items-center">
  <svg stroke="currentColor" fill="currentColor" 
  stroke-width="0" viewBox="0 0 16 16" height="4em" width="4em" 
  xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z">
    </path></svg>
    
  </div>
  <div className="chat-notification-content flex items-center flex-col ">
    <h2 className="font-bold text-2xl">3,500+</h2>
    <h4 className="text-xl">Members</h4>
  </div>
</div>
  <div className=" flex items-center shadow-2xl rounded-xl px-5 py-5  justify-between   border-[#243c5a] border-2 hover:border-[#B60E29]">
  <div className="chat-notification-logo-wrapper  flex items-center">
  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
  <line x1="6" y1="6" x2="6.01" y2="6"></line>
  <line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
    
  </div>
  <div className="chat-notification-content flex items-center flex-col ">
    <h2 className="font-bold text-2xl">10+</h2>
    <h4 className="text-xl">Programs</h4>
  </div>
</div>
  <div className="flex items-center shadow-2xl rounded-xl px-5 py-5  justify-between   border-[#243c5a] border-2 hover:border-[#B60E29]">
  <div className="chat-notification-logo-wrapper  flex items-center">
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
    
  </div>
  <div className="chat-notification-content flex items-center flex-col ">
    <h2 className="font-bold text-2xl">10+</h2>
    <h4 className="text-xl">Cites</h4>
  </div>
</div>


  
</div>
</section>
    );
}