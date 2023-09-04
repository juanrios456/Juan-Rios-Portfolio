'use client'

import Image from "next/image";
import Link from "next/link";
import { navigation } from "../Navigation/NavigationMenu";
import { BsFacebook,BsLinkedin,BsGithub } from 'react-icons/bs'
import { IconContext } from 'react-icons';
import styles from './footer.module.css'

export function Footer(){

  return(
    //Footer Is going to contain 4 Sections

    //Section One will will have the logo, 1 button for contact, 1 button to View Projects and throw all of the Social Links below it.
    //Section Two Will have a list of all the webpages, and the sitemap at the bottom,
    //Section Three will have a one input form that will accept an email for my personal blog of packages and projects that will or have been released.
    <footer className="w-full bg-transparent">
      <div className='  flex justify-start sm:justify-center mx-[6px] mb-[6px] bg-slate-400/[0.55]  rounded-b-lg  '>
        <div className=" py-16 px-2 grid grid-cols-1 grid-rows-auto gap-y-2  sm:grid-cols-2 sm:gap-x-10 md:grid-cols-3 lg:gap-x-20">
          <div className="flex flex-col ">
            <Image src='/Logo-transparent-bg.png'
              alt="My Signature and Logo"
              width={300}
              height={150}
              className="w-full max-w-[180px]  h-auto mb-8 "
            />
            <div className="flex flex-row ">
              <div className="px-2">
                <IconContext.Provider value={{ className:'w-6 h-6 hover:text-primary-light-blue' }} >
                  <Link href='https://www.linkedin.com/in/juan-rios-39551a237'>
                    <BsLinkedin/>
                  </Link>
                </IconContext.Provider>
              </div>
              <div className="px-2">
                <IconContext.Provider value={{ className:'w-6 h-6 hover:text-primary-light-blue' }} >
                  <Link href='https://github.com/juanrios456'>
                    <BsGithub/>
                  </Link>
                </IconContext.Provider>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-1 gap-y-4 grid-rows-auto ">
            {navigation.map((item, index)=>(
              <div key={index} className="">
                <FooterLink href={item.href}  >{item.name}</FooterLink>
              </div>
            ))}
            <div className="md:hidden">
              <FooterLink href='/faq' >FAQ (Common Questions)</FooterLink>
            </div>
            <div className="md:hidden">
              <FooterLink href='mailto:juanriis456@gmail.com' >Email Me Today!</FooterLink>
            </div>
            <div className="md:hidden">
              <FooterLink href='/sitemap' >Sitemap</FooterLink>
            </div>
          </div>

          <div className="hidden md:flex md:space-y-4 md:flex-col ">
            <div className="footerLink">
              <FooterLink href='/faq' >FAQ (Common Questions)</FooterLink>
            </div>
            <div className="">
              <FooterLink href='/sitemap' >Sitemap</FooterLink>
            </div>
            <div className="">
              <FooterLink href='mailto:juanriis456@gmail.com'>Email Me Today!</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

interface Links {
  children: React.ReactNode | string;
  href: string;
}

export function FooterLink( {children, href}:Links){
  return(
  <Link href={href} className="hover:text-primary-light-blue hover:underline">
    {children}
  </Link>
  )
}