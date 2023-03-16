
import React from 'react'
import "../Styles/TodoBuscar.css"
import { TodoContext } from '../Hooks/TodoContext';


function TodoBuscar({}) {
 
  
  return (
    <TodoContext.Consumer >
      {({setSearchValue})=>(
        <input 
          placeholder='Escribe aqui'
          onChange={(e)=>setSearchValue(e.target.value)}
          // value={SearchValue}
        ></input>
      )}
    </TodoContext.Consumer>
  )
  
  
}

export {TodoBuscar}