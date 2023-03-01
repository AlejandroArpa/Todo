import React from 'react'
import "./TodoContador.css"

function TodoContador({total, completed}) {

  
  return (
    <h2 className='TodoContador'>Has completado {completed} de {total} ToDo's </h2> 
  )
}


export {TodoContador}
