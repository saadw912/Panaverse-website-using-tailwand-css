import React from 'react';
import Button from './Button';

const items = [
  { link: '#', text: 'Courses We Offer ' }
];
export default function Hero() {
    return (
     <div className="bg-[url('/bg-hero.jpg')] lg:h-screen md:h-[60%] bg-cover bg-center bg-fixed flex
     items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-[550px] text-white flex flex-col gap-[40px] md:gap-[20px]">
          <div className="text-5xl">
            <h1> Become a Certified Developer</h1>
            <h2 className=" mt-2 text-[#ff4041] ">
            with Panaverse
            </h2>
          </div>
          <div className='bg-[#ff4041] h-[2px] w-[150px]'></div>
          <div>
            <p className="text-2xl">Getting Ready for the Next Generation 
              and Future of the Internet - Join a 13 Trillion
               Dollar Industry with 5 Billion Users</p>
               <React.Fragment>
    {items.map(({ link, text }) => (
      <Button key={link} link={link} text={text} />
    ))}
  </React.Fragment>
          </div>

        </div>

      </div>
    
     </div>
    )
  }