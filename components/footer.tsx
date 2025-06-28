'use client'

import Image from "next/image";
import Link from "next/link";
import { navigation } from "./Navigation/NavigationMenu";
import { BsLinkedin,BsGithub } from 'react-icons/bs'
import { IconContext } from 'react-icons';

export function Footer(){

  return(
    <footer className="">
      <div className="py-16 px-2 flex flex-col justify-center items-center gap-y-4 sm:gap-0 md:space-x-[100px] space-x-[50px] sm:flex-row ">
        <div className="flex flex-col mb-6 sm:mb-0">
          <Image src='/Logo-transparent-bg.png'
            alt="My Signature and Logo"
            width={300}
            height={150}
            className="w-full max-w-[180px] h-auto mb-2"
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

        <div className="flex flex-col space-y-4 w-full max-w-[200px] sm:w-auto">
          {navigation.map((item, index)=>(
            <div key={index} className="">
              <FooterLink href={item.href}  >{item.name}</FooterLink>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-4 w-full max-w-[200px] sm:w-auto">
          <div className="">
            <FooterLink href='/faq' >FAQ (Common Questions)</FooterLink>
          </div>
          <div className="">
            <FooterLink href='/sitemap' >Sitemap</FooterLink>
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