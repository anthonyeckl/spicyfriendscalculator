import React from 'react'

function Button1(props) {
  return (
    <button className={`p-5 m-1 h-24 font-bold ${ props.color }`} onClick={() => {props.onC()}}>{props.text}</button>
  )
}

export default Button1