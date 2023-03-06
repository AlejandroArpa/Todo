import React from 'react'
import "./TodoItem.css"
import { Tag,TagCloseButton, TagLabel } from "@chakra-ui/tag"


function TodoItem(props) {
  

  return (
    
  <li className={'Item '+ (props.completado ? 'Ok':'pen')}>
    <span onClick={props.onComplete} >
      {props.text}
    </span>

    <button 
      className='Delete'
      onClick={props.onDelete}  
    >Eliminar</button>
  </li> 

    
    // <li className={'Item '+ (props.completado ? 'Ok':'pen')} >
     



    //   <button 
    //     className='CompleteB'
    //     onClick={props.onComplete}
    //   ></button>
    //   <p>{props.text}</p>
    //   <button 

    //     className='Delete'
    //     onClick={props.onDelete}  
    //   ></button>
    // </li>
  )
}

export {TodoItem}