'use client'

import { motion, useCycle } from "framer-motion";
import { useEffect, useRef } from "react";
import { RxHamburgerMenu, } from 'react-icons/rx'
import { GrClose, } from 'react-icons/gr'
import { navigation } from "./NavigationMenu";
import Link from "next/link";

export function MobileNavigationMenu(){
  const [isOpen, toggleOpen] = useCycle(false, true);
  const constainerRef = useRef(null);

  const variants = {
    open:{
      opacity: 1,
      x: 0,
      transition:{
        duration: 0.5,
        stiffness: '400',
      }
    },
    closed:{
      opacity: 0,
      x:50,
      transition:{
        stiffness: '400',
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: -1,
      }
    }
  }
  
  return(
    <motion.div
      initial={false}
      animate={ isOpen ? 'open' : 'closed' }
      ref={constainerRef}
      className="z-10"
    >
      <motion.div variants={variants}  className="absolute top-0 right-0 w-[300px] h-[100vh] bg-gradient-to-t from-[#141959]/[.9] to-[#18d8d9]/[.9]" />
      <MenuItemContainer toggle={() => toggleOpen()}  />
      <MenuToggle toggle={() => toggleOpen()} isOpenState={isOpen} />
    </motion.div>
  )
}

export function MenuItemContainer({toggle}:{toggle:VoidFunction}){
  const itemIds = [0, 1, 2, 3, 4];
  const variants = {
    open: {
      display: 'block',
    },
    closed: {
      display: 'none',
    }
  };

  return(
  <motion.ul
    variants={variants}
    className="m-0 p-[25px] absolute top-[100px] right-[75px]  w-56 "
  >
    {navigation.map((i, index) => (
      <MenuItem toggle={toggle} key={`${i.name} ${index}`} href={i.href} name={i.name} icon={i.icon} />
    ))}
  </motion.ul>
  )
};

type MenuTypes = {
  name: string,
  href: string,
  icon: any,
  key: string
}

export const MenuItem = ({ name, icon, href, toggle}:{name: string, href: string, icon: any, key: string, toggle:VoidFunction}) => {
  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition:{
        stiffness: '200',
      }
    },
    closed: {
      x: 50,
      opacity: 0,
      transition:{
        stiffness: '200',
      }
    }
  };


  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className=' p-0 m-0 mb-[20px] flex items-center cursor-pointer  '
    >
      <Link onClick={toggle} href={href} className="flex justify-center items-center border text-white border-white rounded-lg ">
        <div className= 'p-2 rounded-[50%] mr-2 grid place-items-center ' >
          {icon}
        </div>
        <div className='rounded min-w-[190px] grid justift-start py-2   ' >
          {name}
        </div>
      </Link>
    </motion.li>
  );
};


export function MenuToggle({ toggle, isOpenState }:{toggle: VoidFunction, isOpenState: boolean}){
  return(
  <button className="relative bg-white rounded-[50%] p-2" onClick={toggle}>
    {isOpenState ?
      <GrClose className='w-[30px] h-[30px]' />:
      <RxHamburgerMenu className='w-[30px] h-[30px] ' /> 
    }
  </button>
  );
}

