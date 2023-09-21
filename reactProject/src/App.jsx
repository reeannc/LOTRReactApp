import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        this is the header
      </header>
      <main>
        <img src="https://w0.peakpx.com/wallpaper/958/806/HD-wallpaper-lightning-over-volcano-lightning-forces-nature-volcano.jpg" alt="background-image" className="bg-image"></img>
        <Dashboard/>
      </main>
      {/*<footer>This is the footer</footer>*/}
    </div>
  )
}

export default App
