import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Section from './components/section/section'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className=' w-full h-full min-h-screen'>
       <Header/>
       <Section/>
      </div>
    
  )
}

export default App
