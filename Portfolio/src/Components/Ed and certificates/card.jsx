import React from 'react'
import {ArrowUpRight, GraduationCap} from 'lucide-react'
function Card({insitution,duration,qualifiation}) {
  return (
    <>
   <div className='flex flex-col w-full p-4 '>
    <div className='flex flex-row justify-between p-'>
    <div className='text-pretty'>
    <p className=''>{qualifiation}</p>
    </div>

      <p>{duration}</p>
    </div>
    <div className='border-2 border-[#343434] rounded-md p-1 w-fit'>
      <p className='text-[10px]'> {insitution}</p>
    </div>
   </div>
    </>
  )
}

export default Card