import Link from "next/link";

interface ButtonProps{
  children: React.ReactNode;
  href: string;
  className?: string;
  bg?: string
}

export function LinkButton({children, href, className}:ButtonProps) {
  return(
    <Link
     href={href}
     className={` inline-block text-center px-6 py-2 bg-primary-dark-blue rounded-xl hover:bg-primary-dark-blue/60 text-white ${className} `}
    >
      {children}
    </Link>
  )
}