import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  //const [count, setCount] = useState(0)
  let myobj = {
    name:"Bishal",
    age:22
  }
  let myarr=[1,2,3]
  return (
    <>
     <h1 className="text-2xl bg-violet-400 rounded-xl mb-6">Tailwind with React</h1>
    <Card username="Bishal" others={myarr} btnclick="click me" />
    

   
    </>
  )
}

export default App
