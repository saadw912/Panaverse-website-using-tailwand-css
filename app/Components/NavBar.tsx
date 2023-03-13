import Link from "next/link";
import {HiDownload} from "react-icons/hi"
import {AiOutlineMenu} from "react-icons/ai"
import {GoSignOut} from "react-icons/go"
export default function NavBar() {
    return (
      
        
        <div className="fixed top-0 w-[100%] z-10 bg-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                <div >
                    <img src="logo.png" className="h-[60px] overflow-visible" alt="" />
                </div>
                <div className="hidden md:flex gap-6 ">
                    <Link className="hover:text-[#B60E29]" href="/">Home</Link>
                    <Link className="hover:text-[#B60E29]" href="/">Syllabus</Link>
                    <Link className="hover:text-[#B60E29]" href="/">Faculty</Link>
                    <Link className="hover:text-[#B60E29]" href="/">About</Link>
                    <Link className="hover:text-[#B60E29]" href="/">Contact</Link>
                </div>
                <a href="#" className="hidden md:flex border border-[#B60E29] px-4 py-1 text-[#B60E29]
                 rounded-[5px] items-center gap-2 hover:bg-[#B60E29] 
                 hover:text-[#fff] transition duration-200
                ">Apply
                <GoSignOut />
                </a>
                <div className="md:hidden text-[24px]">
                    <AiOutlineMenu />

                </div>
                

            </div>
        </div>
      
    )
  }
  