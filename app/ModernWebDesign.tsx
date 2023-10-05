import Image from "next/image";
import { BsCheckAll } from 'react-icons/bs'

export function ModernWebDesign(){
  return(
  <div className=" bg-tertiary-light-blue w-full py-20 px-2 ">
    <div className=" flex items-center justify-center mb-14 ">
      <h2 className=" text-center ">Responive Design / Development</h2>
      <BsCheckAll className='w-14 h-auto text-emerald-500' />
    </div>
    <div className="relative md:flex md:items-center md:flex-row-reverse ">
      <div className="flex justify-center items-center mb-10">
        <Image src='/Responsive-Web-Dev-Example.png' alt='Example of what a responsive Website showing 3 screens, one desktop, one tablet and one phone'
          width={900}
          height={600}
          className="w-full max-w-xl h-auto "
        />
      </div>
      <div className=" md:max-w-xl ">
        <ul className="list-disc pl-14 text-lg ">
          <li >Working With Front End Development since 2018</li>
          <li >Practicing Back End Development on the road to mastery</li>
          <li>Years of Experience with Multiple Frameworks, Tools Libraries and More </li>
        </ul>
      </div>
    </div>
  </div>
  )
	}