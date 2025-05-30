import React from "react";


export default function Counter() {
  const [counter, setCounter] = React.useState(0);

  
  return (
    <>
        <button onClick={() => setCounter(counter+1)}>
            Click Me
        </button>
        <div>{counter}</div>
    </>
  )
}
