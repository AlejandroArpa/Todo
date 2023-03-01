import React from 'react'
import "./TodoItem.css"


function TodoItem(props) {
  

  return (
    <li className={'Item '+ (props.completado ? 'Ok':'pen')} >
      <button 
        className='CompleteB'
        onClick={props.onComplete}
      ></button>
      <p>{props.text}</p>
      <button 
        className='Delete'
        onClick={props.onDelete}  
      ></button>
    </li>
  )
}

export {TodoItem}