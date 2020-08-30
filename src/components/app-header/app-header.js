import React, {Component} from 'react';

import './app-header.css'

export default class AppHeader extends Component{
  render(){
    return   (
      <div className='app-header d-flex '>
          <h1>Todo List</h1>
          <h2>{this.props.toDo} more to do,{this.props.done} </h2>
      </div>
    )
  }
}
// const AppHeader = ({toDo,done})=>{
//     return   (
//       <div className='app-header d-flex '>
//         <h1>Todo List</h1>
//          <h2>{toDo} more to do,{done} </h2>
//       </div>
//     )
//   }


// export default AppHeader;