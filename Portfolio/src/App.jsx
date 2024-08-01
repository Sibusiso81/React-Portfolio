import './App.css'
import About from './Components/About/about'
import Education from './Components/Ed and certificates/education'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'

function App() {


  return (
    <main className='overflow-y-hidden '>
    <Home/>
    <About/>
    <Projects/>
    <Education/>
    </main>
  )
}

export default App
