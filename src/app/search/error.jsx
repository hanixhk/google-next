'use client'
import { useEffect } from "react"

export default function Error({error,reset}) {
    useEffect(() => {
    console.log(error)
  }, [error])

  
  return (
    <div className="flex-col flex justify-center items-center pt-10">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <button onClick={() => reset()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Try again</button>

        
    </div>
  )
}
