import { RevealOnScroll } from "@components/ScrollTransitions";
import Image from "next/image";

export function Hero(){
  return(
  <div className="relative h-[95vh] bg-black " >
    <video className="w-full h-full object-cover absolute object-left-bottom"  autoPlay muted loop playsInline>
      <source src="/portfolio/rotating-earth.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
    <div className="h-full w-full flex items-center relative justify-end right-auto md:right-36 md:absolute ">
      <RevealOnScroll>
      <div className="p-4 rounded-lg max-w-[400px] space-y-5 bg-black/[.3] ">
        <h1 className="text-center" >Portfolio</h1>
        <p className="">Here you will find a list of skills and my work experiences, as well as a couple of projects and their tech stacks</p>
      </div>
      </RevealOnScroll>
    </div>
    
  </div>
  )
}
