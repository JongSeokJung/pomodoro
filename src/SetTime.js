import { useRef } from "react";

const SetTime = ({label, curr, increase, decrease}) => {
  return (
    <div>
      <h2>{label}</h2>
      <button onClick={increase}>+</button>
      <span>{curr}</span>
      <button onClick={decrease}>-</button>
    </div>
  )
}

export default SetTime