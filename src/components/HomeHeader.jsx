import Link from 'next/link';
import { TbGridDots } from 'react-icons/tb';


export default function HomeHeader() {
  return (
    <header className='flex justify-end p-5 text-sm' >
    <div className='flex space-x-4 items-center'>
      <Link href={"https://mail.google.com"} 
      className="hover:underline"
        >Gmail</Link>
        <Link href={"https://image.google.com"} 
      className="hover:underline"
        >Images</Link>
        <TbGridDots className='bg-transparent hover:bg-slate-500 p-2 text-4xl rounded'/>
      <button className='bg-blue-500 px-6 py-2 rounded-md font-medium transition-shadow hover:shadow-md text-white'>Sign  in</button>
      </div>
      </header>
  )
}

