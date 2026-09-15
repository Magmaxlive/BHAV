import { engagement } from "@/app/layout"
import { CalendarDays,Clock9,MapPinCheck,Dot,Music,Armchair,Star,MicVocal,Check  } from 'lucide-react';
import CountDown from "./CountDown";
import { Herofeatures } from "@/items/HeroFeatures";
import Image from "next/image";


export default function HeroSection() {
  return (
    <div id="hero" className="relative w-full bg-center bg-cover bg-no-repeat" style={{backgroundImage:"url('/images/herobg.jpg')"}}>

      <div className="absolute inset-0 bg-black/85"></div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col py-26 px-8 gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">

          {/* left column */}

          <div className="flex flex-col gap-4 lg:justify-self-start lg:items-start items-center justify-center ">
            
              <h4 className="text-[#cfb781] tracking-wide uppercase font-semibold">
                  Seven Entertainment presents
              </h4>
                <Image src="/images/raagam.png" height={100} width={380} alt="raagam logo" className="h-full md:w-[20%] lg:w-[30%] w-[40%]" />
                <h1 className="lg:text-5xl md:text-3xl text-2xl text-pretty font-bold text-white">
                Naresh Iyer Live in Concert
              </h1>
              <h2 className={`${engagement.className} font-bold tracking-widest lg:text-6xl md:text-5xl text-4xl text-[#d3bc8d]`}>Raagam 2026</h2>
              <div className="flex flex-col gap-4">
                  <h6 className="lg:text-lg text-xs text-pretty md:text-lg md:tracking-wider font-semibold mt-6 tracking-tight text-white">A magical Valentine's Day Musical evening in Auckland</h6>
                  <p className="lg:text-base text-[10px] md:text-lg font-normal lg:tracking-wider tracking-tight text-white flex items-center">Live Orchestra <Dot/> Romantic Melodies <Dot/> One-night-Only Concert</p>
              </div>

              <hr className="my-3 w-full opacity-25" />

              <div className="flex flex-col gap-4 text-lg">
                  <div className="flex-col flex lg:flex-row gap-4 lg:gap-6">
                      <div className="flex gap-3 items-center  text-[#d3bc8d]">
                          <CalendarDays /> <p className="font-semibold tracking-wider">Friday, 14 february 2026</p>
                      </div>
                      <div className="flex gap-3 items-center  text-[#d3bc8d]">
                          <Clock9 /> <p className="font-semibold tracking-wider uppercase">7:00 pm - 10:00 pm</p>
                      </div>
                  </div>

                  <div className="flex gap-3 items-start  text-[#e2e0db]">
                          <MapPinCheck /> <a href="https://www.google.com/maps/dir//Due+Drop+Events+Centre,+770+Great+South+Road,+Wiri,+Manukau+2104/" target="_blank" className="font-semibold tracking-wider">Due Drop Events Centre, Manukau City, Auckland</a>
                  </div>

                  <div className="mt-8 flex flex-col text-center gap-3">
                    <a target="_blank" href="https://www.eventfinda.co.nz/2026/naresh-iyers-valentine-musical-concert/auckland/manukau-city/tickets" className="rounded-sm lg:w-fit py-3 font-bold px-10  bg-[#d3bc8d] text-[#213a46] uppercase">book tickets now</a>
                    <h6 className="lg:text-sm text-xs flex tracking-wide items-center lg:justify-start justify-center">Limited seats <Dot/> Instant confirmation</h6>
                  </div>
              </div>
          </div>

          {/* left column ends */}

          {/* right column */}

          <div className="flex flex-col justify-end lg:w-[380px] py-4 w-full min-h-[600px] overflow-hidden bg-white shadow-lg rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl lg:justify-self-end justify-self-center bg-cover bg-center gap-2" style={{backgroundImage:"url('/images/Naresh Iyer.png')"}}>
            <div className="flex flex-col items-center justify-center gap-1 py-3 backdrop-blur-xl bg-white/1">
                <h5 className="text-2xl font-semibold text-[#d3bc8d] flex gap-3 items-center"><Music />Valentine's Day Special</h5>
                <h6 className="font-semibold tracking-wider text-white">Naresh Iyer Live in Auckland</h6>
                <p className="flex gap-3 text-sm items-center tracking-wider  text-white"><Armchair />Limited seats</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 py-4 ">
                <CountDown/>
            </div>

              <div className="flex justify-center pb-2">
                  <a href="https://www.eventfinda.co.nz/2026/naresh-iyers-valentine-musical-concert/auckland/manukau-city/tickets" className="rounded-sm lg:w-fit py-2 font-bold px-5 border  border-[#d3bc8d] text-[#d3bc8d] uppercase">Get tickets</a>

              </div>
          </div>

          {/* right column ends*/}

        </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                        {Herofeatures.map((i,index)=>
                        (
                            <div key={index} className="flex flex-col w-full gap-4 items-center backdrop-blur-xl bg-white/5 py-6  px-5 rounded-lg  justify-center transition-transform duration-300 ease-out hover:scale-105">
                                <div className="flex h-15 w-15 p-2 bg-pink-900 justify-center items-center rounded-full text-[#cfb781]">
                                        {i.icon}
                                </div>
                                
                                <span className="font-bold text-2xl text-[#cfb781] text-center">{i.title}</span>
                                <span className="font-semibold text-center">{i.description}</span>
                            </div>
                        ))}
                        
                    </div>
      </div>
      </div>
    
  )
}
