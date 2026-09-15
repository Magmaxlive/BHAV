'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import {Menu,X} from 'lucide-react';
import {Link} from 'react-scroll'

export default function Navbar() {
    const [drawerOpen,setDrawerOpen] = useState(false)
    

    const toggleNavbar = () =>{
        setDrawerOpen(!drawerOpen)
    }

    const Ticket = () =>{
        window.open(
            "https://www.eventfinda.co.nz/2026/naresh-iyers-valentine-musical-concert/auckland/manukau-city/tickets",
            "_blank"
        );
    };

  return (
    <>
    <nav className={`sticky top-0 z-50`}>
            <div className="py-6 backdrop-blur-lg bg-gradient-to-l from-pink-900 to-black text-[#d3bc8d]">
            <div className="px-4 mx-auto container  text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrik-0">
                        <Image src='/images/logo.webp' className="h-15 lg:w-full" height={160} width={100} alt="7 entertainment logo"/>
                    </div>

                    <ul className="hidden lg:flex  space-x-12">
                        <li><Link to='hero' offset={-100} smooth={true} duration={500} className='cursor-pointer text-[1.1rem] transition-all duration-300 uppercase font-semibold hover:text-white hover:underline underline-offset-8'>Home</Link></li>
                        <li><Link to='aboutus' offset={-200} smooth={true} duration={500}  className='cursor-pointer text-[1.1rem] transition-all duration-300 uppercase font-semibold hover:text-white hover:underline underline-offset-8'>about us</Link></li>
                        <li><Link to='services' offset={-200} smooth={true}  className='cursor-pointer text-[1.1rem] transition-all duration-300 uppercase font-semibold hover:text-white hover:underline underline-offset-8'>Services</Link></li>
                        <li><Link to="events"  offset={-200} smooth={true} className='cursor-pointer text-[1.1rem] transition-all duration-300 uppercase font-semibold hover:text-white hover:underline underline-offset-8'>events</Link></li>
                        <li><Link to="contact" offset={-200} smooth={true}  className='cursor-pointer text-[1.1rem] transition-all duration-300 uppercase font-semibold hover:text-white hover:underline underline-offset-8'>contact</Link></li>
                    </ul>

                    <div className="hidden lg:flex justify-center items-center">
                        <a target="_blank" href="https://www.eventfinda.co.nz/2026/naresh-iyers-valentine-musical-concert/auckland/manukau-city/tickets" className="flex items-center gap-2 border border-[#d3bc8d] text-[#d3bc8d] rounded-sm px-5 py-3  font-bold uppercase text-[1rem] hover:bg-[#d3bc8d] hover:border-[#0a1a1f] hover:text-[#0a1a1f]">Book Tickets</a>
                    </div>

                    <div className="lg:hidden flex flex-row gap-6 justify-end">
                        <div className="flex justify-center items-center">
                                <a target="_blank" href="https://www.eventfinda.co.nz/2026/naresh-iyers-valentine-musical-concert/auckland/manukau-city/tickets" className="flex items-center gap-2 border border-[#d3bc8d] text-[#d3bc8d] rounded-sm px-3 py-2  font-bold uppercase text-xs hover:bg-[#d3bc8d] hover:border-[#0a1a1f] hover:text-[#0a1a1f]">Book Tickets</a>
                        </div>
                        <button onClick={toggleNavbar} className="cursor-pointer relative z-50">
                            {drawerOpen ?<X/> : <Menu/>}
                        </button>
                    </div>

                    {drawerOpen &&
                        <div className="fixed z-20 w-full bg-gradient-to-l from-pink-900 to-black right-0 top-0 p-12 flex flex-col justify-start items-center lg:hidden gap-3">
                             <ul className="flex flex-col gap-3">
                                <li><Link to='hero' offset={-100} smooth={true} duration={500} className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-white hover:underline underline-offset-8'>Home</Link></li>
                                <li><Link to='aboutus' offset={-200} smooth={true} duration={500}  className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-white hover:underline underline-offset-8'>about us</Link></li>
                                <li><Link to='services' offset={-200} smooth={true} className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-white hover:underline underline-offset-8'>Services</Link></li>
                                <li><Link to="events" offset={-200} smooth={true} className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-white hover:underline underline-offset-8'>events</Link></li>
                                <li><Link to="contact" offset={-200} smooth={true} className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-white hover:underline underline-offset-8'>contact</Link></li>
                            </ul>
                            
                        </div>
                    }
                </div>
            </div>
            </div>
            {!drawerOpen && 
                <>

                    <div onClick={Ticket} className="text-center cursor-pointer py-4 backdrop-blur-lg overflow-hidden whitespace-nowrap bg-gray-900 text-lg  lg:text-xl tracking-widest text-[#d3bc8d] font-semibold">
                    <div className="inline-flex animate-marquee"  style={{ animation: "marquee 18s linear infinite",}}>
                        <span className="font-bold uppercase mr-4 text-pink-400">
                        Limited Tickets Remaining !
                        </span>
                        <span className="mr-8">
                        More than half of $99 & $69 tickets already sold
                        </span>

                        
                        <span className="font-bold uppercase mr-4 text-pink-400">
                        Limited Tickets Remaining !
                        </span>
                        <span className="mr-8">
                        More than half of $99 & $69 tickets already sold
                        </span>

                        <span className="font-bold uppercase mr-4 text-pink-400">
                        Limited Tickets Remaining !
                        </span>
                        <span className="mr-8">
                        More than half of $99 & $69 tickets already sold
                        </span>
                    </div>
                </div>
                </>
            }
            

        </nav>
            
    </>
  )
}
