import React, {Component} from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

export default class TodoList extends Component{
  render(){
    const elements = this.props.todos.map((item) => {
      return(
        <li key = {item.id} className='list-group-item'>
          <TodoListItem {...item} onDeleted = {() => this.props.onDeleted(item.id)}/>
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
// const TodoList = ({todos,onDeleted}) =>{
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