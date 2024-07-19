import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj= {
    username: "sudhir",
    age: 27
  }

  let myArr=[1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwindtest</h1>

      <Card username="chaiorcode" btnText="click me"/>
      <Card username="sudhir" btnText="Visit me"/>

    </>
  )
}

export default App
