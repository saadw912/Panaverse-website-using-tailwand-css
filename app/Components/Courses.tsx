import Heading from "./Heading";
import React from 'react';
import {SiJsonwebtokens} from "react-icons/si"
import {FaRobot} from "react-icons/fa"
import {GrCloudComputer} from "react-icons/gr"
import {RiComputerFill} from "react-icons/ri"
import {GiBiohazard} from "react-icons/gi"
import {TbSettingsAutomation} from "react-icons/tb"
const items  = [
    { text: 'Courses Offers' }
  ];
export default function Courses() {
    return (
        <div className=" bg-[url('/bg-course.jpg')] bg-cover">
      <section className="container mx-auto py-10 px-4">
         <React.Fragment >
    {items.map(({ text }) => (
      <Heading  key={text} Heading={text}  />
    ))}
  </React.Fragment>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className=" flex flex-col gap-4 px-8 py-5 bg-[#fff] opacity-80 text-[#000]
     hover:text-[#B60E29] text-center items-center border-[#fff] 
     cursor-pointer border-2 hover:border-[#B60E29] rounded-xl">
        <SiJsonwebtokens className="text-[28px]" />
        <h2 className="font-medium text-[20px]">Web 3.0</h2>
        <p>
        This Web 3.0 and Metaverse specialization focuses on developing 
        full-stack Web 3.0 and Metaverse
         experiences for the next generation of the internet.
        </p>
    </div>
   
    <div className=" flex flex-col gap-4 px-8 py-5 bg-[#fff] opacity-80 text-[#000]
     hover:text-[#B60E29] text-center items-center border-[#fff] 
     cursor-pointer border-2 hover:border-[#B60E29] rounded-xl">
        <FaRobot className="text-[28px]" />
        <h2 className="font-medium text-[20px]">Artificial Intelligence</h2>
        <p>
        The AI and Deep Learning specialization focuses
         on building and deploying intelligent APIs using OpenAI models
         and building custom Deep Learning Tensorflow models.
        </p>
    </div>
   
    <div className=" flex flex-col gap-4 px-8 py-5 bg-[#fff] opacity-80 text-[#000]
     hover:text-[#B60E29] text-center items-center border-[#fff] 
     cursor-pointer border-2 hover:border-[#B60E29] rounded-xl">
        <GrCloudComputer className="text-[28px]" />
        <h2 className="font-medium text-[20px]">Cloud-Native Computing</h2>
        <p>
        The Cloud-Native Computing Specialization 
        focuses on Containers, Kubernetes, 
        and CDK for Kubernetes.
        </p>
    </div>
   
    <div className=" flex flex-col gap-4 px-8 py-5 bg-[#fff] opacity-80 text-[#000]
     hover:text-[#B60E29] text-center items-center border-[#fff] 
     cursor-pointer border-2 hover:border-[#B60E29] rounded-xl">
        <RiComputerFill className="text-[28px]" />
        <h2 className="font-medium text-[20px]">Ambient Computing and IoT</h2>
        <p>
        Ambient Computing and IoT Specialization focuses on
         building Smart Homes, Offices, and Cities
          using Voice computing, Matter, and Embedded Devices.
        </p>
    </div>
   
    <div className=" flex flex-col gap-4 px-8 py-5 bg-[#fff] opacity-80 text-[#000]
     hover:text-[#B60E29] text-center items-center border-[#fff] 
     cursor-pointer border-2 hover:border-[#B60E29] rounded-xl">
        <GiBiohazard className="text-[28px]" />
        <h2 className="font-medium text-[20px]">Genomics and Bioinformatics Specialization</h2>
        <p>
        Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured
        </p>
    </div>
   
    <div className=" flex flex-col gap-4 px-8 py-5 bg-[#fff] opacity-80 text-[#000]
     hover:text-[#B60E29] text-center items-center border-[#fff] 
     cursor-pointer border-2 hover:border-[#B60E29] rounded-xl">
        <TbSettingsAutomation className="text-[28px]" />
        <h2 className="font-medium text-[20px]">Network Programmability and Automation Specialization</h2>
        <p>
        How to automate systems with code using a variety of
         technologies and tools, including Linux, Python, APIs, and Git.
        </p>
    </div>
   
  </div>

      </section>
      </div>
    );
}
