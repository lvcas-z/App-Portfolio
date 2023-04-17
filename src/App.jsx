import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import './styles.css'
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
