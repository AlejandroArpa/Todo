import React from 'react'
import "../Styles/TodoContador.css"
import { TodoContext } from '../Hooks/TodoContext'

function TodoContador() {

  
  return (
    <TodoContext.Consumer >
      {({totalTodos, completed})=>(
        <h2 className='TodoContador'>Has completado {completed} de {totalTodos} ToDo's </h2>   
      )}
    </TodoContext.Consumer>
    
  )
}


export {TodoContador}
