
import React from 'react'
import "./TodoBuscar.css"


function TodoBuscar({SearchValue, setSearchValue}) {
 


  const onSearchValueChange = (event) =>{
    // console.log(event.target.value)
    setSearchValue(event.target.value);
  }
  
  return (

    <input 
      placeholder='Escribe aqui'
      onChange={onSearchValueChange}
      // value={SearchValue}
    ></input>
  )
  
  
}

export {TodoBuscar}