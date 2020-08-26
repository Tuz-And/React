import React from 'react';
import './todo-list-item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoListItem = ( {label,important=false}) =>{
    // console.log(props.label);
    // const {label,important} = props;
    const style = {
        color:important ? 'red': 'black',
        fontWeight: important ? 'bold' : 'normal'
    }
return (
    <span className=''>
        <span style ={style} className = 'todo-list-item'>{label}</span>
        <span>
             <button className='float-right btn btn-outline-danger btn-sm'><FontAwesomeIcon icon={faExclamation} />     </button>
             <button className='float-right btn btn-outline-success btn-sm'><FontAwesomeIcon icon={faTrash} />     </button>
        </span>
    </span>
);
}   

export default TodoListItem;