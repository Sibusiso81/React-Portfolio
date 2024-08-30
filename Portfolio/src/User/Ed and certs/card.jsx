import React from 'react'

function Card({insitution,duration,qualifiation}) {
  return (
    <section className='overflow-y-hidden max-w-screen-sm '>
    <div className='flex flex-col w-full p-4 '>
     <div className='flex flex-row justify-between md:space-x-2'>
     <div className='text-pretty '>
     <p className=''>{qualifiation}</p>
     </div>
 
       <p>{duration}</p>
     </div>
     <div className='border-2 border-[#343434] rounded-md p-1 w-fit mt-2'>
       <p className='text-[10px]'> {insitution}</p>
     </div>
    </div>
     </section>
  )
}

export default Card
