import Link from "next/link";

interface ButtonProps{
  children: string | JSX.Element;
  href: string;
  className?: string;
}

export function LinkButton({children, href, className}:ButtonProps) {
  return(
    <Link
     href={href}
     className={` inline-block text-center px-6 py-2 bg-tertiary-light-blue rounded-xl hover:bg-secondary-light-blue ${className} `}
    >
      {children}
    </Link>
  )
}