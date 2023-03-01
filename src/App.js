import React, { useState } from "react";
import {TodoContador} from "./TodoContador"
import { TodoBuscar } from "./TodoBuscar";
import { TodoLista } from "./TodoLista";
import { TodoItem } from "./TodoItem";
import { CrearTodoBoton } from "./CrearTodoBoton";
import "./App.css"
import { useEffect } from "react";


let searchedTodos=[];

function useLocalStorage(itemName, initialValue){
  const localStorageItem=localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){

    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem=initialValue;

  }else{

    parsedItem=JSON.parse(localStorageItem);

  }

  const[item, setItem]=useState(parsedItem);

  const saveItem =(newItem)=>{
    const stringifyItem =JSON.stringify(newItem);
    localStorage.setItem(itemName,stringifyItem);
    setItem(newItem);
  }

  return[item,saveItem]

};

function App() {
  
 

  const [todos, saveTodos]= useLocalStorage("TODOS_V1",[]);
  const[SearchValue, setSearchValue]=useState("");

  const completed=todos.filter(todo => !!todo.completado).length;
  const totalTodos=todos.length;
  
  useEffect(()=>{
    console.log("UseEffect")
  },[totalTodos]);

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
    <div className="App">
      <TodoContador 
        total={totalTodos}
        completed={completed}
        />
      <TodoBuscar 
        SearchValue={SearchValue}
        setSearchValue={setSearchValue}
        />
      <CrearTodoBoton 
        onAdd={()=>addTodos(SearchValue)}

      />
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
      

    </div>
    
  );
}

export default App;
