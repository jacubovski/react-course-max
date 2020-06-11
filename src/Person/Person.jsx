import React from 'react'
import './Person.css'

const person = props => {
  return (
    <div className="Person">
      <p>I'm a {props.name}</p>
      <p>{props.children}</p>
      <input onChange={(e) => props.changeHandler(e.target.value, props.name)}/>
      <button onClick={() => props.click(props.idx)}>Delete</button>
    </div>
  )
}

export default person