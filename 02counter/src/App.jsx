import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(0)

  //let Counter = 5

  const addValue = () => { 
    setCounter(Counter + 1)
  }

  const removeValue = () => {
    setCounter(Counter - 1)
  }

  return (
    <>
     <h1>Krish Nakrani</h1>
     <h2>Counter Value: {Counter}</h2>

     <button onClick={addValue}>Add Value {Counter}</button>
     <button onClick={removeValue}>Remove Value {Counter}</button>
    </>
  )
}

export default App
