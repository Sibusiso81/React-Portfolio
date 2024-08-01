import { GraduationCap, Section } from 'lucide-react'
import React from 'react'
import Card from './card'

function Education() {
  return (
    <section className='h-screen w-screen text-white font-poppins mx-auto flex flex-col items-center justify-center my-auto mt-10 '>
        <h1 className=' font-poppins font-semibold text-2xl text-center mx-auto p-5'>Educaton & Certifications</h1>
    <div className='flex w-full h-full justify-center '>
    <div className='space-y-5 '>
     
    <Card insitution={'Phoenix College of Johannesburg'} duration={'2020/09/12'} qualifiation={'Matric '}/>
    <Card insitution={'University of Johannesburg'} duration={'Present'} qualifiation={'Bcom Human Resources Managment '}/>
   
       </div>
    </div>

    </section>
  )
}

export default Education