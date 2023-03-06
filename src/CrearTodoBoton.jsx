import React from 'react'
import "./CrearTodoBoton.css"

function CrearTodoBoton(props) {
  
  
  return (
    <button className='boton' onClick={props.onAdd}>Entrar</button>
  )
}

export {CrearTodoBoton}