import React from 'react'

function TodoLista(props) {
  return (
    <ul>
      {props.children}
    </ul>
  )
}

export {TodoLista}