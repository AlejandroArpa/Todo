import React from 'react'
import {TodoContador} from "../Components/TodoContador"
import { TodoBuscar } from "../Components/TodoBuscar";
import { TodoLista } from "../Components/TodoLista";
import { TodoItem } from "../Components/TodoItem";
import { CrearTodoBoton } from "../Components/CrearTodoBoton";
import { TodoContext } from '../Hooks/TodoContext';

function AppUI({}) {
  return (
    <div className="App">
      <TodoContador />
        <div className="buscar-crear">
          <TodoBuscar />
          <CrearTodoBoton />
        </div>
      
      <div className="todo-list-container">
        <TodoContext.Consumer>
          {({completeTodos, deleteTodos, searchedTodos})=>(
            <TodoLista >
            {searchedTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completado={todo.completado}
              onComplete={()=>completeTodos(todo.text)}
              onDelete={()=>deleteTodos(todo.text)}
              
              />
            ) )}
            
          </TodoLista>
          )

          }
        </TodoContext.Consumer>
        
      </div>
      

    </div>
    
  );
}

export {AppUI} 