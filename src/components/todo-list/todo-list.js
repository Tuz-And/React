import React, {Component} from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

export default class TodoList extends Component{
  render(){
    const elements = this.props.todos.map((item) => {
      return(
        <li key = {item.id} className='list-group-item'>
          <TodoListItem {...item} 
          onDeleted = {() => this.props.onDeleted(item.id)} 
          onToggleDone = {() => this.props.onToggleDone(item.id)}
          onToggleImportant = {() => this.props.onToggleImportant(item.id)}/>
        </li>
      )
    });
      
    return(
      <ul className='list-group todo-list'>
        {elements}
      </ul>
    )
  }
}

// const TodoList = ({todos,onDeleted,onToggleDone,onToggleImportant}) =>{
//   const elements = todos.map((item) => {
//     return(
//       <li key = {item.id} className='list-group-item'>
//         <TodoListItem {...item} onDeleted = {() => onDeleted(item.id)}/>
//       </li>
//     )
//   });

//     return(
//       <ul className='list-group todo-list'>
//         {elements}
//       </ul>
//     )
// }

// export default TodoList;