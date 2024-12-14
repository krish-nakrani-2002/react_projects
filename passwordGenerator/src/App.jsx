import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowd, setNumAllowd] = useState(false)
  const [charAllowd, setCharAllowd] = useState(false)
  const [Password, setPassword] = useState("")

  //useRef hook
  const passRef = useRef(null)

  const passwdGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowd) str += "0123456789"
    if (charAllowd) str += "!@#$%^&*()-_=+\|[]{}?`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
      
  }, [length, numAllowd, charAllowd, setPassword])

  const copyPassToClip = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    passwdGenerator()
  }, [length, numAllowd, charAllowd, passwdGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passRef}
        />
        <button 
        onClick={copyPassToClip}
        className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>Copy</button>
      </div>
      
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numAllowd}
          id='numberInput'
          onChange={() => {
            setNumAllowd((prev) => !prev); 
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
          defaultChecked={charAllowd}
          id='charInput'
          onChange={() => {
            setCharAllowd((prev) => !prev); 
          }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
