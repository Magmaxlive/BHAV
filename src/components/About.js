import Image from "next/image"
import { Check } from "lucide-react"

export default function About() {
  return (
    <div id="aboutus" className="lg:py-20 pb-15 lg:pt-0 px-8 bg-gradient-to-b from-black via-pink-900 to-black">
        <div className="flex flex-col gap-20 lg:gap-25 max-w-[1440px] mx-auto justify-center items-center">
            <h2 className="font-bold text-2xl lg:text-3xl uppercase text-[#cfb781]">
                About Us
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                    <div className="relative w-full h-full aspect-[16/9]">
                    <Image
                        src="/images/herobg.jpeg"
                        alt="about-image"
                        fill
                        className="object-cover rounded-xl"
                    />
                    </div> 
                    <div className="flex flex-col gap-8">
                        <h4 className="text-[#cfb781] tracking-wide uppercase font-semibold">
                        Seven Entertainment
                        </h4>

                        <h2 className="text-white text-2xl lg:text-3xl font-bold text-pretty">
                            PREMIUM EVENT MANAGEMENT IN NEW ZEALAND
                        </h2>

                        <div className="text-white text-lg flex flex-col gap-3 ">
                            <p>
                            We are a complete event management company dedicated to conducting world-class live events and music showcases across Australia, New Zealand, Canada and the USA.
                            </p>
                            <p>
                                From concerts to corporate events, we blend strategy, creativity and flawless execution to make every celebration extraordinary. With a commitment to quality and seamless execution, we endeavor to create events that inspire, connect, and entertain.
                            </p>
                        </div>

                        <div className="flex lg:flex-row flex-col gap-4 lg:gap-8">
                            <div className="flex flex-col gap-4 text-white font-bold">
                                <div className="flex gap-3">
                                    <Check className="text-[#cfb781]"/>
                                    <h6>World-class Live Events</h6>
                                </div>

                                <div className="flex gap-3">
                                    <Check className="text-[#cfb781]" />
                                    <h6>Global Talent Access</h6>
                                </div>

                                <div className="flex gap-3">
                                    <Check className="text-[#cfb781]" />
                                    <h6>Premium Production Quality</h6>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 text-white font-bold">
                                <div className="flex gap-3">
                                    <Check className="text-[#cfb781]"/>
                                    <h6>Legendary Music Concerts</h6>
                                </div>

                                <div className="flex gap-3">
                                    <Check className="text-[#cfb781]" />
                                    <h6>Iconic Artistic Collaboration</h6>
                                </div>

                                <div className="flex gap-3">
                                    <Check className="text-[#cfb781]" />
                                    <h6>Strong Multinational Reach</h6>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
