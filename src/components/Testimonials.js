import { testimonials } from "@/items/TestimonialItems"
import { Quote } from 'lucide-react';
import InstagramGrid from "./InstagramGrid";

export default function Testimonials() {
  return (
    <div className="relative w-full bg-cover bg-no-repeat" style={{backgroundImage:"url('/images/probg.jpg')"}}>
            <div className="absolute inset-0 bg-black/85"></div>
          <div className="relative max-w-[1440px] mx-auto flex flex-col py-24 px-8 gap-20 justify-center items-center">
                <div className="flex flex-col gap-6 text-center  text-gray-300">
                    <h2 className="font-bold text-2xl lg:text-3xl uppercase text-[#cfb781]">
                    Reflections & Reviews
                    </h2>
                    <h5 className="tracking-wider text-balanced">
                             LET’S HEAR FROM OUR CLIENTS
                    </h5>
                </div>
    
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
                    {testimonials.map((i,index)=>
                    (
                        <div key={index} className="flex flex-col w-full gap-4 items-center backdrop-blur-xl bg-white/5 py-6  px-5 rounded-lg  justify-center transition-transform duration-300 ease-out hover:scale-105">
                            <div className="flex h-15 w-15 p-2 bg-pink-900 justify-center items-center rounded-full text-[#cfb781]">
                                    <Quote/>
                            </div>
                            
                            <span className="font-base italic text-center">" {i.content} "</span>
                            <span className="font-bold text-md text-[#cfb781] text-center">{i.name}</span>

                        </div>
                    ))}
                    
                </div>

                <InstagramGrid/>


                
          </div>
        </div>
  )
}
