import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex items-center justify-center px-4 h-[90vh]' >
      <div className=' bg-red-300/[.5] w-full max-w-[400px] h-[150px] px-4 rounded flex items-center justify-center'>
        <div className=''>
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link className='underline' href="/">Return Home</Link>
        </div>
      </div>
    </div>
  )
}