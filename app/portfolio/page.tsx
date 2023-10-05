import { Hero } from "./Hero"
import { Portfolio } from "./Portfolio"
import { WebProjectsSection } from "./PreviousProjects"

export default function Page(){
  return(
  <div className="text-slate-50">
    <Hero/>
    <div className=' py-10  bg-gradient-to-b from-black to-[#f5f5f5]/[0]'>
      <WebProjectsSection/>
    </div>
  </div>
  )
}