import { features } from "@/items/Features"
import BookingBtn from "./BookingBtn"

export default function FeatureSection() {
  return (
    <div id="whychooseus" className="py-24 px-8 bg-gradient-to-tl from-pink-900 to-black">
            <div className="flex flex-col gap-15 max-w-[1440px] mx-auto justify-center items-center">
                <div className="flex flex-col justify-center gap-6 items-center">
                    <h2 className="font-bold text-2xl lg:text-3xl uppercase text-center text-[#cfb781]">
                        EXPERIENCE THE EXTRAORDINARY
                    </h2>
    
                    
                </div>
    
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                                {features.map((i,index)=>
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

                <BookingBtn/>
            </div>
          
        </div>
  )
}
