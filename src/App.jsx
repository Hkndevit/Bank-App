import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Girokonto from './components/Girokonto/Girokonto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Girokonto />
    </>
  )
}

export default App
