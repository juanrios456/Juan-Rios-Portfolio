import Image from "next/image";

export function Hero(){
  return(
  <div className="relative h-[500px] " >
    <video className="w-full h-full object-cover absolute object-left-bottom"  autoPlay muted loop>
      <source src="/portfolio/rotating-earth.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
    <div className="h-full w-full flex items-center relative justify-end right-auto md:right-36 md:absolute ">
      <div className="px-4 rounded-md max-w-[400px] space-y-5 ">
        <h1 className="text-center" >Portfolio</h1>
        <p className="">Here you will find a list of skills and my work experiences, as well as a couple of projects and their tech stacks</p>
      </div>
    </div>
    
  </div>
  )
}
