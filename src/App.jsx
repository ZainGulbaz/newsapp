import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Section from './components/section/section'
import { ApiSourceEnums } from './utils/constants'

function App() {
  const [apiSource,setApiSource] = useState(ApiSourceEnums.newsApi);

  return (
    
      <div className=' w-full h-full min-h-screen'>
       <Header apiSource={apiSource} setApiSource={setApiSource}/>
       <Section apiSource={apiSource}/>
      </div>
    
  )
}

export default App
