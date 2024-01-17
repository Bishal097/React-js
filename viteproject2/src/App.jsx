import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]=useState(5);

const addvalue = () => {
  console.log("value added",counter);
  setcounter(counter+1);
}
const deletevalue= () =>
{
  console.log("value deleted",counter);
  if(counter==0)
  {
    return 0;
  }
  setcounter(counter-1);
}
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={addvalue}>Add Value</button>
      <button onClick={deletevalue}>Decrease Value</button>
      <p>lorem10{counter}

           </p>
    </>
  )
}

export default App
