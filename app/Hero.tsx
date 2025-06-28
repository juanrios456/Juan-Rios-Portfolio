import { RevealOnScroll } from "@components/ScrollTransitions";
import Image from "next/image";
import Link from "next/link";

export function Hero(){


  return(
  <>
    <div className="relative h-[95vh]  ">
      <Image src='/net-image.jpg'
        alt="Purple globe "
        width={900}
        height={1000}
        priority={true}
        className="absolute w-[100%] h-[100%] object-cover object-left "
      />
      <div className="w-5xl h-full flex items-center relative justify-center">
        <RevealOnScroll>
        <div className="bg-[#141959]/[.85] relative max-w-xl rounded-2xl flex flex-col justify-center items-center px-3 py-8 sm:px-10 sm:py-14 mx-4 text-white ">
          <h1 className='pb-6 '>Juan's<br />Digital Portfolio</h1>
          <p className='pb-2'>Here you may find examples of previous projects, mini games, project libraries, and more.</p>
          <p>If you are looking to have a webpage design follow the contact button below!</p>
          <Link href="/contact" className="bg-secondary-light-blue hover:bg-secondary-light-blue/70 text-black  inline-block text-center px-6 py-2 rounded-xl">Contact</Link>
        </div>
        </RevealOnScroll>
      </div>
    </div>
  </>
  )
}
