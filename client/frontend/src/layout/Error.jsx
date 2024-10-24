import React from 'react'

export default function Error({message}) {
  return (
    <div>
      <h1 className='text-red-800 font-bold font-sans md:text-2xl text-sm'>{message}</h1>
    </div>
  )
}

