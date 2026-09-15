import { Star } from "lucide-react"
import { products } from "@/items/ProductionItems"

export default function ProductionSection() {
  return (
    <div id="services" className="relative w-full bg-cover bg-no-repeat" style={{backgroundImage:"url('/images/probg.jpg')"}}>
        <div className="absolute inset-0 bg-black/85"></div>
      <div className="relative max-w-[1440px] mx-auto flex flex-col py-26 px-8 gap-20 justify-center items-center">
            <div className="flex flex-col gap-6 text-center  text-gray-300">
                <h2 className="font-bold text-2xl lg:text-3xl uppercase text-[#cfb781]">
                OUR PREMIUM services
                </h2>
                <h5 className="tracking-wider text-balanced">
                    We transform ideas into extraordinary live experiences by combining iconic talent, cutting-edge technology, and innovative concepts.
                </h5>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
                {products.map((i,index)=>
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
