import { whychoose } from "@/items/Whychooseitems"

export default function WhyChoose() {
  return (
    <div id="whychooseus" className="py-24 px-8 bg-gradient-to-tl from-black via-pink-900 to-black">
        <div className="flex flex-col gap-20 lg:gap-15 max-w-[1440px] mx-auto justify-center items-center">
            <div className="flex flex-col justify-center gap-6 items-center">
                <h2 className="font-bold text-2xl lg:text-3xl uppercase text-[#cfb781]">
                    Why Choose Us
                </h2>

                <h5 className="tracking-wider text-pretty text-white text-center">
                    We transform every event into an unforgettable experience with creativity, precision, and world-class execution.
                </h5>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
                            {whychoose.map((i,index)=>
                            (
                                <div key={index} className="lg:min-w-[200px] min-w-[280px] flex flex-col w-full gap-4 items-center backdrop-blur-xl bg-white/10 py-6  px-5 rounded-lg  justify-center transition-transform duration-300 ease-out hover:scale-105">
                                    
                                    <span className="font-bold text-5xl text-[#cfb781] text-center">{i.count}</span>
                                    <span className="font-semibold text-center uppercase">{i.title}</span>
                                </div>
                            ))}
                            
                        </div>
        </div>
      
    </div>
  )
}
