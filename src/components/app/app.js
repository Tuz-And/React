import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';

import './app.css';


export default class App extends Component{
  state = {
    todoList : [
        {label: "Drink Coffee", important:false, id:1},
        {label: "Build React App", important:false, id:2 },
        {label: "Drink Tea", important:false, id:3},
    ]  
  }
  deleteItem = (id) => {
    // console.log(id)
    this.setState(({ todoList }) => {
        const idx = todoList.findIndex((el) => el.id === id);
        const left = todoList.slice(0,idx);
        const right = todoList.slice(idx+1);
        const newArray = [...left, ...right];
        return{
          todoList:newArray
        }
    })
  }
 render(){
   
    return(
        <div className='todo-app'>
     
        <AppHeader toDo = {1} done = {3}/>
        <div className = "top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
        </div>    
            <TodoList todos = {this.state.todoList} onDeleted = {this.deleteItem}/>
            <ItemAddForm />
        </div>
      )
 }
 
}
// const App = ()=>{
//     const 
//   return(
//     <div className='todo-app'>
 
//       <AppHeader toDo = {1} done = {3}/>
//       <div className = "top-panel d-flex">
//             <SearchPanel />
//             <ItemStatusFilter />
//         </div>    
//             <TodoList todos = {todoList} onDeleted = {(id)=> console.log(`deleted: ${id}`)}/>
//             <SearchPanelBottom />
//     </div>
//   )
// }

// export default App;