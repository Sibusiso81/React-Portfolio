import React from 'react'
import {ArrowUpRight, GraduationCap} from 'lucide-react'
function Card() {
  return (
    <>
   <div className='bg-neutral-400/15 flex flex-col h-fit w-fit max-w-[400px] rounded-md '>
  <div className='flex flex-row justify-between p-1 pt-4'>
  <div className='bg-neutral-300/10  p-2 flex flex-row ml-2  rounded-lg  '>
      <p>Lorem</p>
    
   </div>
  <div className=' '>
  <ArrowUpRight className='bg-neutral-300/40 stroke-neutral-300 rounded-lg hidden hover:block '/>
  </div>
  </div>
    <div className='p-4'>
      <h1 className='text-xl pb-2'>Lorem</h1>
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsam sequi quod. Quibusdam, ut explicabo dolor perferendis beatae vitae quos vel iure possimus optio quia iste, ipsum laudantium tempore quidem.</p>
    </div>
   </div>
    </>
  )
}

export default Card