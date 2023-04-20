import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import './styles.css'
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
