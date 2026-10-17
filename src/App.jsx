import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(count+1);
  }

  function decrement(){
    setCount(count-1);
  }

  function reset(){
    setCount(0);
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>Count : {count}</p>

      <div className='buttons'>
        <Button title = "INCREMENT" func = {increment} Symbol = "➕"/>
        <Button title = "DECREMENT" func = {decrement} Symbol = "➖"/>
        <Button title = "RESET" func = {reset} Symbol = "🔄"/>
      </div>
    </>
  )
}



export default App
