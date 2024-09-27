import React from 'react'
import Home from '../Home/Home'
import About from '../About/about'
import Education from '../Ed and certs/education'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'


function Collection() {
  return (
    <main className='overflow-y-hidden overflow-x-hidden'>
      <Home/>
      <About />
      <Projects/>
      <Education/>
      <Contact/>
    </main>
  )
}

export default Collection
