import { useState } from "react";

export function Counter(){
  
const [counter, setCounter] = useState(0);
  function onIncrement(){
    setCounter(counter+1);
  }
  function onDecrement(){
    setCounter(counter-1);
  }
  return(
    <div>
      <h1>{counter}</h1>
      <h2>Contador</h2>
      
      <button onClick={onIncrement}>Incrementar +1</button>
      <button onClick={onDecrement}>Decrementar -1</button>
    </div>
  )
}