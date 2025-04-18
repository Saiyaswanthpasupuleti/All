import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Data'
import ResultData from './Example'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Data/> */}
      <ResultData/>
    </>
  )
}

export default App
