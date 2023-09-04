import { RevealOnScroll } from "@components/ScrollTransitions";
import Image from "next/image";

export function Hero(){


  return(
  <>
    <div className="relative h-[95vh]  ">
      <Image src='/net-image.jpeg'
        alt="Purple globe "
        width={900}
        height={1000}
        priority={true}
        className="absolute w-[100%] h-[100%] object-cover object-left "
      />
      <div className="w-5xl h-full flex items-center relative justify-center md:justify-end  ">
        <RevealOnScroll>
        <div className="bg-[#141959]/[.85] relative w-[100%] max-w-xl rounded-2xl flex flex-col justify-center px-10 py-14  mx-4 text-white ">
          <h1 className='pb-6'>Welcome To Juans <i className="bg-[#0cfeff]/[.60] px-2">Digital Portfolio</i></h1>
          <p className='pb-2'>Here you may find examples of previous projects, mini games, project libraries, and more.</p>
          <p>If you are looking to have a webpage design follow the contact button below!</p>
          <div>
          </div>
        </div>
        </RevealOnScroll>
      </div>
    </div>
  </>
  )
}
