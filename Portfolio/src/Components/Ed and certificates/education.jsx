import { GraduationCap, Section } from 'lucide-react'
import React from 'react'
import Card from './card'

function Education() {
  return (
    <section className='h-screen w-screen text-white font-poppins mx-auto flex flex-col items-center justify-center my-auto mt-10 '>
        <h1 className=' font-poppins font-semibold text-2xl text-center mx-auto p-5'>Educaton & Certifications</h1>
    <div className='flex items-center justify-center '>
    <div className=' grid grid-cols-1 sm:gird-cols-2 gap-5'>
     <Card/>
      <Card/>
      <Card/>
       </div>
    </div>

    </section>
  )
}

export default Education