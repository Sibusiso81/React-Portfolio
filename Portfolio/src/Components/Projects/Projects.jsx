import React from 'react'

function Projects() {
  return (
    <section className='h-screen w-screen text-white flex flex-col '>
   
        <div className='grid grid-cols-2 gap-10 text-center lg:text-center'>
            <div className='col-span-2 lg:col-span-1 font-bold font-poppins  text-3xl p-2 lg:p-6' >
            <h1>Projects</h1>
            </div>
            <div className='col-span-2 lg:col-span-1 flex flex-row justify-center lg:justify-center '>
            <div>
            <dotlottie-player  src="https://lottie.host/e8cd36b5-3318-41fb-b0cf-17c59c726f4d/QGOHqm7K5u.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
            <h2 className='mt-2 text-center font-poppins'>A few lines away till complition...</h2>
            </div>
            </div>

        </div>
    </section>
  )
}

export default Projects