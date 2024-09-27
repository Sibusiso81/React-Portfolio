import { AtSign, Mail, MoveDown, PhoneCall } from 'lucide-react'
import { easeInOut, motion } from "framer-motion"
import React, { useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import supabase from '../../supabase'

function Home() {
    
    /* const loader = async()=>{
        const nevigate = useNavigate()
        nevigate('/login')
    } */
  return (
    <section className='h-screen w-screen bg-neutral-950 text-white flex flex-col font-general  text-wrap '>
        <div className='flex-1 '>
        <div className='grid grid-cols-4 gap-2 p-4 text-[12px] font-bold my-auto text-wrap'> 
            <motion.div
           className='overflow-hidden h-fit font-bold  '
            >
                <motion.h2
                 initial={{
                    y:30,
                    opacity:0,
                 }}
                 animate={{
                    y:0,
                    opacity:1,
                 }}
                 transition={{
                    duration:1,
                    ease:'easeInOut',
                 }}
                >

                    <Link className='text-start '
                    /* onClick={loader} */
                    to={'/login'}
                    >
                    Sibusiso <br /> Zulu.
                    </Link>
                </motion.h2>
                
            </motion.div>
            <div>
                <motion.p
                        initial={{
                            y:30,
                            opacity:0,
                         }}
                         animate={{
                            y:0,
                            opacity:1,
                         }}
                         transition={{
                            duration:1,
                            ease:'easeInOut',
                         }}
                >

                    <Link to={'dashboard'}>HR Student & Frontend Developer</Link>
                </motion.p>
            </div>
            <motion.div
             initial={{
                y:30,
                opacity:0,
             }}
             animate={{
                y:0,
                opacity:1,
             }}
             transition={{
                duration:1,
                ease:'easeInOut',
             }}
            className='col-span-2 md:col-start-4'>
                <a  
                 className='text-wrapz  col-span-2 text-center md:col-start-2 font-general font-bold '
                 href='mailto:zulusibusiso81@gmail.com?subject
                 Let +0027t s work together?body=Let me now of any idea you have and how i coudl contribute '
                >zulusibusiso81@gmail.com</a>
                <br />
               
                
            </motion.div>

        </div>
        {/* Name and Surname */}
        <div className=' flex flex-col items-start  ml-2 lg:ml-6 mt-28 p-5 h-fit w-full overflow-hidden text-white '>
            <motion.div
            initial={{
                y:320,
                opacity:0,
            }}
            animate={{
                y:0,
                opacity:1,
            }}
            transition={{
                duration:1.4,
                
                ease:'easeInOut',
            }}
            >
            <h1 className='text-8xl md:text-9xl font-bold font-general   lg:text-[160px] xl:text-[220px] '>Zulu</h1>
            <div className='flex flex-row items-center font-general'>
                <h1 className='text-6xl md:text-7xl 
               lg:text-[140px] xl:text-[200px]
                font-bold '>Sibusiso</h1>
                <span className='bg-white h-5 w-5 ml-2 mt-6 lg:mt-10 lg:h-10 lg:w-10 xl:mt-20 rounded-full'></span>
            </div>
            </motion.div>
        </div>
        </div>
        {/* Scroll To explore */}
        <div className='flex flex-row overflow-hidden h-fit items-center mt-48 md:mt-36 lg:mt-10 mb-2'>
        <motion.div
        
        initial={{
            y:0,
            opacity:0,
        }}
        animate={{
            y:[-20,-5,20,30],
            opacity:1,
        }}
        transition={{
            delay:1,
            duration:1,
            repeatType:'loop',
            repeatDelay:2,
            repeat:9000,
            ease:'easeInOut',

        }}
        >
        <MoveDown className='h-fit' />
        </motion.div>
        <span>
            <motion.p
            initial={{
                y:-50
            }}
            animate={{
                y:0,
            }}
            transition={{
                duration:0.85,
                ease:'easeInOut'
            }}
            className='ml-2  font-bold text-[10px]'>SCROLL TO EXPLORE</motion.p></span>
        </div>
    </section>
)
}

export default Home