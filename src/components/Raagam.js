
import Image from "next/image"
import { raagamfeature } from "@/items/RaagamFeatures"
import { singers } from "@/items/Singers"
import BookingBtn from "./BookingBtn"

export default function Raagam() {
  return (
     <div id="events" className="relative w-full bg-cover bg-no-repeat" style={{backgroundImage:"url('/images/probg.jpg')"}}>
            <div className="absolute inset-0 bg-black/85"></div>
                <div className="relative max-w-[1440px] mx-auto flex flex-col py-26 px-8 gap-20 justify-center items-center">
                        <div className="flex flex-col gap-10 text-center  text-gray-300">
                            
                            <div className="flex lg:flex-row flex-col w-full gap-4 items-center backdrop-blur-xl bg-white/10 py-6  px-8 rounded-lg justify-center">
                                <div className="flex flex-col gap-6 items-center text-white">
                                    <div className="rounded-md py-2 w-fit px-4 text-sm font-semibold uppercase bg-[#cfb781] text-[#213a46]">
                                        Proudly Presented By
                                    </div>
                                    <div className="flex flex-col gap-3 items-center justify-center">
                                        <Image src="/images/kripalogo.png" height={100} width={150} alt="kripalogo" />
                                        <h4 className="text-white/70 lg:text-lg text-sm">Empowering cultural connection through strategic partnership</h4>
                                    </div>
                                </div>

                            

                            </div>
                            <div className="flex flex-col gap-6 ">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                        <Image src="/images/raagam.png" height={100} width={380} alt="raagam logo" className="h-full md:w-[20%] lg:w-[15%] w-[50%]" />

                                    <h2 className="font-bold text-3xl lg:text-4xl uppercase text-[#cfb781]">
                                    RAAGAM 2026
                                    </h2>
                                    <h3 className="tracking-wider text-balanced text-white text-lg lg:text-xl font-semibold">
                                        The Ultimate Music Concert of New Zealand
                                    </h3>
                                    <h5 className="font-semibold text-lg tracking-wide">
                                        14th February 2026
                                    </h5>
                                </div>

                                <div className="flex flex-col gap-8">
                                    <p className="text-pretty mt-6">   
                                        Raagam, presented by Kripa Financial Solutions, is an anti-narcotics youth initiative that blends music and cultural connection to inspire a healthier future for young New Zealanders. Featuring National Award–winning singer Naresh Iyer, this Valentine’s Musical Concert stands as a celebration of self-love, resilience, and cultural connection.
                                    </p>

                                    <div className="flex lg:flex-row flex-col gap-4 justify-center">
                                        {raagamfeature.map((i,index)=>
                                        (
                                            <div key={index} className="py-2 px-4 font-semibold rounded-full text-white bg-pink-900 hover:text-pink-900 hover:bg-white">
                                                {i.title}
                                            </div>
                                        ))}
                                        
                                    </div>
                                </div>

                                <div className="flex flex-col gap-8 mt-3">
                                    <h2 className="font-bold text-2xl text-[#cfb781] uppercase">Featuring</h2>

                                        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
                                                {singers.map((i,index)=>
                                                (
                                                    <div key={index} className="flex flex-col w-full gap-4 items-center text-white justify-start backdrop-blur-xl bg-white/5 py-6  px-5 rounded-lg  justify-center transition-transform duration-300 ease-out hover:scale-105">
                                                        <div className="relative w-full lg:h-[350px] h-[400px] rounded-lg overflow-hidden">
                                                            <Image
                                                            src={i.image}
                                                            alt={`${i.name} image`}
                                                            fill
                                                            className= {i.class? i.class : 'object-cover object-center'}
                                                            />
                                                        </div>
                                                        
                                                        
                                                        <span className="font-bold text-2xl text-[#cfb781] text-center">{i.name}</span>
                                                        <span className="font-thin tracking-wide text-sm text-pretty">{i.description}</span>
                                                    </div>
                                                ))}
                                                
                                        </div>

                                        <BookingBtn/>
                                </div>

                                

                            </div>
                        </div>
            
                        
                        
                </div>
        </div>
  )
}
