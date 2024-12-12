import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowd, setNumAllowd] = useState(false)
  const [charAllowd, setCharAllowd] = useState(true)
  const [Password, setPassword] = useState("")

  const passwdGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowd) str += "0123456789"
    if (charAllowd) str += "!@#$%^&*()-_=+\|[]{}?`~"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
    
    setPassword(pass)
      
  }, [length, numAllowd, charAllowd, setPassword])


  return (
    <>
    <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
