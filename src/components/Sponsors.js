import { other,media,platinum,diamond } from "@/items/SponsorLogso"
import Image from "next/image"


export default function Sponsors() {
  return (
    <div id="sponsors" className="py-24 px-8 bg-gradient-to-tl from-black via-pink-900 to-black">
            <div className="flex flex-col gap-15 max-w-[1440px] mx-auto justify-center items-center">
                <div className="flex flex-col justify-center gap-6 items-center">
                    <h2 className="font-bold text-2xl lg:text-3xl text-center uppercase text-[#cfb781]">
                        VISIONARY SPONSORS OF RAAGAM
                    </h2>
    
                    <h5 className="tracking-wider text-center text-pretty text-white">
                        These are the supporting hands of Raagam, enabling New Zealanders to connect directly with a vibrant, music-loving audience, gain high media visibility, and align their brand with culture, creativity, and positive social impact.
                    </h5>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <h1>Platinum Sponsor</h1>
                            {platinum.map((i,index)=>
                                (
                                    <div key={index} className="lg:min-w-[200px] min-w-[280px] flex flex-col w-full gap-4 items-center backdrop-blur-xl bg-white/10 py-6  px-5 rounded-lg  justify-center transition-transform duration-300 ease-out hover:scale-105">
                                         <div className="relative w-full h-[50px] flex items-center justify-center">
                                            <Image
                                            src={i.image}
                                            fill
                                            alt={`${i.Name} logo`}
                                            className="object-cover"
                                            />
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <div className="flex flex-col gap-4 justify-center items-center">
                            <h1>Diamond Sponsor</h1>
                            {diamond.map((i,index)=>
                                (
                                    <div key={index} className="lg:min-w-[200px] min-w-[280px] flex flex-col w-full gap-4 items-center backdrop-blur-xl bg-white/10 py-6  px-5 rounded-lg  justify-center transition-transform duration-300 ease-out hover:scale-105">
                                         <div className="relative w-full h-[50px] flex items-center justify-center">
                                            <Image
                                            src={i.image}
                                            fill
                                            alt={`${i.Name} logo`}
                                            className="object-contain"
                                            />
                                        </div>
                                    </div>
                                ))}
                        </div>
                                
                </div>

                
                <div className="flex flex-col gap-4">
                    <h1 className="text-center">Supporting Sponsors</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 ">
                                {other.map((i,index)=>
                                (
                                    <div key={index} className="lg:min-w-[200px] min-w-[280px] flex flex-col w-full gap-4 items-center backdrop-blur-xl bg-white/10 py-6  px-5 rounded-lg  justify-center transition-transform duration-300 ease-out hover:scale-105">
                                         <div className="relative w-full h-[50px] flex items-center justify-center">
                                            <Image
                                            src={i.image}
                                            fill
                                            alt={`${i.Name} logo`}
                                                className={i.class? i.class : 'object-contain'}
                                            />
                                        </div>
                                    </div>
                                ))}
                                
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-center">Media Partners</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
                                {media.map((i,index)=>
                                (
                                    <div key={index} className="lg:min-w-[200px] min-w-[280px] flex flex-col w-full gap-4 items-center backdrop-blur-xl bg-white/10 py-6  px-5 rounded-lg  justify-center transition-transform duration-300 ease-out hover:scale-105">
                                         <div className="relative w-full h-[50px] flex items-center justify-center">
                                            <Image
                                            src={i.image}
                                            fill
                                            alt={`${i.Name} logo`}
                                                className={i.class? i.class : 'object-cover'}
                                            />
                                        </div>
                                    </div>
                                ))}
                                
                    </div>
                </div>
            </div>
          
        </div>
  )
}
