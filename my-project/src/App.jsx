import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div 
      style={{backgroundColor : color}}
      className='w-screen h-screen fixed top-0 left-0'>
        <div className='fixed w-screen bottom-20 flex justify-center items-center'>
            <div className='bg-white p-2 rounded-xl flex justify-center items-center gap-2.5'>

              <button 
              onClick={() => setColor("red")}
              style={{backgroundColor : "red"}}
              className='text-white p-0 text-4xl px-0 outline-none border-none hover:outline-none'
              >Red</button>

              <button 
              onClick={() => setColor("Green")}
              style={{backgroundColor : "Green"}}
              className='text-white p-0 text-4xl px-0 outline-none border-none hover:outline-none'
              >Green</button>

              <button 
              onClick={() => setColor("Blue")}
              style={{backgroundColor : "Blue"}}
              className='text-white p-0 text-4xl px-0 outline-none border-none hover:outline-none'
              >Blue</button>

              <button 
              onClick={() => setColor("Aqua")}
              style={{backgroundColor : "Aqua"}}
              className='text-white p-0 text-4xl px-0 outline-none border-none hover:outline-none'
              >Aqua</button>

              <button 
              onClick={() => setColor("Black")}
              style={{backgroundColor : "Black"}}
              className='text-white p-0 text-4xl px-0 outline-none border-none hover:outline-none'
              >Black</button>

              <button 
              onClick={() => setColor("Gray")}
              style={{backgroundColor : "Gray"}}
              className='text-white p-0 text-4xl px-0 outline-none border-none hover:outline-none'
              >Gray</button>

              <button 
              onClick={() => setColor("Orange")}
              style={{backgroundColor : "Orange"}}
              className='text-white p-0 text-4xl px-0 outline-none border-none hover:outline-none'
              >Orange</button>

              <button 
              onClick={() => setColor("Gold")}
              style={{backgroundColor : "Gold"}}
              className='text-white p-0 text-4xl px-0 outline-none border-none hover:outline-none'
              >Gold</button>

            </div>
        </div>
      </div>
    </>
  )
}

export default App
