'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MobileNavigationMenu } from './MobileNavigation'
import { MdDeveloperMode,MdContactPage,MdHomeFilled } from 'react-icons/md'
import { BiAtom, } from 'react-icons/bi'
import { BsClipboard, } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export const navigation = [
  { name: 'Home', href: '/', current: false, icon: <MdHomeFilled/> },
  { name: 'Contact', href: '/contact', current: false, icon: <MdContactPage/>, },
  { name: 'Website Development', href: '/web-development', current: false, icon: <MdDeveloperMode/>, },
  { name: 'Graphic Design', href: '/graphic-design', current: false, icon: <BiAtom/> },
  { name: 'Portfolio', href: '/portfolio', current: false, icon: <BsClipboard/> },
];

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export function NavigationMenu() {
  return (
    <>
      <div className="min-h-full sticky top-0 left-0 z-10 bg-gradient-to-r from-[#141959] to-[#18d8d9] ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href='/'>
                  <Image
                    width={50}
                    height={50}
                    className="h-12 w-auto"
                    src="/Logo-no-words.png"
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                      ${item.current ? 'bg-gray-900 text-white' : 'text-[#f5f5f5] hover:bg-gray-700 hover:text-white'}
                       rounded-md px-3 py-2 text-sm font-medium flex items-center `}
                      aria-current={item.current ? 'page' : undefined}
                    >
                    <IconContext.Provider value={{ className:'mr-2'}}>
                      {item.icon}
                    </IconContext.Provider>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="-mr-2 flex lg:hidden">
              <MobileNavigationMenu/>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}


