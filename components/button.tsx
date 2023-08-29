import Link from "next/link";

interface ButtonProps{
  children: string | JSX.Element;
  href: string;
}

export function Button({children, href}:ButtonProps) {
  return(
    <Link
     href={href}
     className="text-center px-6 py-2 bg-"

    >
      {children}
    </Link>
  )
}