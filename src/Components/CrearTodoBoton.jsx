import React from 'react'
import "../Styles/CrearTodoBoton.css"
import { TodoContext } from '../Hooks/TodoContext'

function CrearTodoBoton() {
  
  
  return (
    <TodoContext.Consumer >
      {({addTodos, SearchValue})=>(
        <button className='boton' onClick={()=>addTodos(SearchValue)}>Entrar</button>
      )}
    </TodoContext.Consumer>
  )
}

export {CrearTodoBoton}