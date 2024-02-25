import React from 'react'
import Link from 'next/link'
import PaginationButtons from './PaginationButtons'


export default function ImageSearchResult({results}) {
  return (
    <div className='sm:pb-24 pb-40 mt-4'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-4 px-3'>
        {results.items.map((result)=>(
            <div className='mb-8' key={result.link}>
                <div className='group'>
                    <Link href={result.image.contextLink}>
                    <img 
                    src={result.link}
                    alt={result.title}
                    className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                    </Link>

                    <Link href={result.image.contextLink}>
                    <h2 className='text-xl font-bold mt-4 group-hover:underline truncate'>{result.title}</h2>
                    </Link>

                    <Link href={result.image.contextLink}>
                   <p className='group-hover:underline truncate text-xl'></p>
                    </Link>
                </div>

            </div>
        ))};
        <div className='ml-16'>  
        <PaginationButtons />
</div>
</div>
    </div>
  )
}
