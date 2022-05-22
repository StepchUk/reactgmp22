import React from "react";
import "./index.css"

const Counter = () => {

  const [value, setValue] = React.useState(0)

  const decrement = () => {
    if (value !== 0) {
      setValue(value - 1)
    }
  }
  
  return (
    <div className="counter">
      <p>{value}</p>
      <div className="buttons">
        <button onClick={() => decrement()}>-</button>
        <button onClick={() => setValue(value + 1)}>+</button>
      </div>
    </div>
  )
}

export default Counter
