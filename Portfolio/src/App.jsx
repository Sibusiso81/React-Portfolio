import './App.css'
import About from './Components/About/about'
import Contact from './Components/Contact/Contact'
import Education from './Components/Ed and certificates/education'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'

function App() {


  return (
    <main className='overflow-y-hidden overflow-hidden '>
    <Home/>
    <About/>
    <Projects/>
    <Education/>
    <Contact/>
    </main>
  )
}

export default App
