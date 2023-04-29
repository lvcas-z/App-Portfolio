import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import './styles.css'
import data from './data/data.json'
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About data={data.skills}/>
      <Projects data={data}/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
