interface CardInterface {
  children: any;
  className?: string;
};

interface CardHeader{
  children: any;
  className?: string;
  divider?: boolean;
};

interface CardBody{
  children: any;
  className?: string;
};

interface CardFooter{
  children: any;
  className?: string;
  divider?: boolean;
};

export function Card({children,className}:CardInterface){
  return(
  <div className={` w-full max-w-md mx-2 p-8 bg-[#f9f9f9] rounded-xl flex flex-col ${className}`}>
    {children}
  </div>
  );
}

export function CardHeader({children, className, divider=false}:CardHeader ){
  return(
    <div className={`mb-4 min-h-[10px] relative   `}>
      <div className='mb-2'>
        <h3 className={`relative block ${className}`}>{children}</h3>
      </div>
      <div className={divider ? 'w-full border-b border-b-black absolute bottom-0 ' : ''}></div>
    </div>
  );
}

export function CardBody({children, className}:CardBody){
  return(
  <div className="mb-4">
    <div className={`relative px-2 ${className}`}>
      {children}
    </div>
  </div>
  );
}

export function CardFooter({children, className, divider}:CardFooter){
  return(
  <div className="relative">
    <div className={divider ? 'w-full border-b border-b-black absolute top-0 left-0 right-0 ' : ''}></div>
    <div className={`relative ${className} `}>
      {children}
    </div>
  </div>
  )
}