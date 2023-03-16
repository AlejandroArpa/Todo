import React from 'react'
import { createContext } from 'react'
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { useState } from 'react';

const TodoContext =createContext();
let searchedTodos=[];

function TodoProvider(props) {

  const [todos, saveTodos]= useLocalStorage("TODOS_V1",[]);
  const[SearchValue, setSearchValue]=useState("");
  const completed=todos.filter(todo => !!todo.completado).length;
  const totalTodos=todos.length;


  const completeTodos = (text) => {
    const todoIndex=todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completado= !todos[todoIndex].completado;
    saveTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex=todos.findIndex(todo => todo.text === text);
    const newTodos = [];
    todos.map(todo => {
      if(todos[todoIndex].text != todo.text ){
        newTodos.push(todo);
      }
    }) 
    saveTodos(newTodos);
  }
 
  const addTodos= (text)=>{
    const newArray=[]
    todos.map(todo=>{
      newArray.push(todo);
    })
    newArray.push({text:text,completado:false})
    saveTodos(newArray);
  
  }

  if(SearchValue.length>=1){
    searchedTodos=todos.filter(todo=>{
      const todoText=todo.text.toLowerCase();
      const Searchtext=SearchValue.toLowerCase();
      return todoText.includes(Searchtext);
    })
  }
  else{
    searchedTodos=todos;
  }

  return (
    <TodoContext.Provider value={{
      totalTodos,
      completed,
      SearchValue,
      setSearchValue,
      addTodos,
      searchedTodos,
      completeTodos,
      deleteTodos,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }