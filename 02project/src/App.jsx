import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter<20){
      setCounter(counter + 1);
    }
  }
  const removeValue = () =>{
    if(counter>0){
      setCounter(counter - 1);
    }
  }
  
  return (
    <>
      <p>Counter value : {counter}</p>

      <button onClick={addValue}>Add value</button>
      <br />

      <button onClick={removeValue}>Remove value</button>

      <p>Value = {counter}</p>
    </>
  )
}

export default App
