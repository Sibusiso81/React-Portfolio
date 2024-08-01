import React from 'react'
import { motion } from "framer-motion"
import './contact.css'
function Contact() {
  return (
<section className='h-screen w-screen text-white font-poppins flex flex-col justify-center mx-auto p-1 max-w-screen-sm items-center'>
<div className='flex flex-col space-y-2 '>
  <h1 className='text-xl'>Contact</h1>
  <p className='text-lg'>Let's talk about working together.</p>
  <form action="https://formbold.com/s/6l1de" method='POST' className='justify-center items-center '>
  <div className='flex flex-row items-center space-x-2 max-w-screen-sm'>
    <div className='bg-[#ececec] rounded-full w-4 h-4 animation-pulse'></div>
    <div className=''><p>Avilable for new opportunities</p></div>
  </div>

  <div className=' grid grid-cols-2 gap-6 p-2 lg:col-start-2'>
  <div className='col-span-1'>
      <input type="text" name="name" id="" className='rounded-md bg-[#ececec] w-full h-10 p-1 border-transparent border outline outline-transparent text-black' placeholder='Your name'  />
    </div>
    <div className='col-span-1'>
      <input type="email" name="email" id="" className='rounded-md bg-[#ececec] col-span-1 w-full h-10 p-1 border-transparent border outline outline-transparent text-black' placeholder='Your Email' />
    </div>

    <div className='col-span-2 border-none outline-none outline-transparent'>
      <textarea  name="message" id="" className='rounded-xl bg-[#ececec] border-transparent border outline outline-transparent w-full h-44  text-black p-1'></textarea>
    </div>
    <div className='col-span-2 border-none'>
      <button type='submit' className='bg-[#ececec] text-black w-full h-10 rounded-lg'> Send</button>
    </div>
    
    
  </div>
  </form>
</div>
</section>
   
  )
}

export default Contact