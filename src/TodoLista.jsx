import React from 'react'

function TodoLista(props) {
  return (
    <ul className="todoItem">
      {props.children}
    </ul>
  )
}

export {TodoLista}