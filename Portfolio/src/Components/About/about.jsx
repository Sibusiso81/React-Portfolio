import React from 'react'

function About() {
  return (
    <section className='h-screen  lg:h-screen w-fit bg-neutral-950 flex flex-col justify-center '>
        <div className='grid grid-cols-2 gap-12 md:gap-2  mt-4 p-2 '>
            <div className='col-span-2 md:col-span-1  text-white  '>
            <div className='flex flex-row   mt-2 p-1 md:p-6 md:justify-center items-center'>
                <div className='grid grid-cols-3'>
                <div className=' rounded-full overflow-hidden h-fit w-fit text-wrap  
                 '>
                    <img
                    className='rounded-lg h-11 w-11 '
                    src="https://media.licdn.com/dms/image/D4D03AQEBgzj0i234Iw/profile-displayphoto-shrink_100_100/0/1718420191933?e=1727308800&v=beta&t=Np9t6uOqVPT801tIpBkK35hkKZmFqKfV4nlVjV2t3CA" 
                    alt="profile-iimg" />
                 </div>
                 <div className='flex flex-col text-white text-md font-poppins  text-sm mx-auto  my-auto col-span-2 '>
                    <p>Sibusiso Zulu</p>
                    <p>HRM Student   & <br />
                     Frontend Developer</p>
                 </div>
                </div>
            </div>
            </div>
            <div className='col-span-2 md:col-span-1 text-white flex flex-col font-poppins lg:text-[16px] md:mt-6 pr-1 lg:pr-10'>
                <div className='justify-end items-end justofy-center p-2'><p>I am a dedicated human resources student at the University of Johannesburg with a passion for technology and personal development. Through self-motivation and a keen interest in the digital world, I have taught myself frontend development and am currently expanding my skills into backend development. My journey in tech is driven by a relentless pursuit of knowledge and a desire to create impactful solutions.


    <br />
    <br />
    
    {/* Beyond academics and technology, I center my life around fitness, kindness, and striving to be the best version of myself. I believe in the power of resilience and determination, values that guide me in both my personal and professional endeavors. Whether collaborating with a team or working on individual projects, my goal is to make a positive difference for myself and those around me. Thank you for visiting my portfolio, and I look forward to connecting and sharing more about my work and passions. */}
<br />
<br />
           </p></div>
            </div>
        </div>
    </section>
  )
}

export default About