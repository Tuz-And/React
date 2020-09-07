import React,{Component} from 'react';
// import ReactDOM from 'react-dom';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';

import './app.css';


export default class App extends Component{
  maxId=100;
  state = {
    todoList : [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Build React App'),
      this.createTodoItem('Drink Tea'),
        // {label: "Drink Coffee", important:false, id:1},
        // {label: "Build React App", important:false, id:2 },
        // {label: "Drink Tea", important:false, id:3},
    ],
    term:'',
    filter:'all'//active,done,all  
  }
  createTodoItem(label){
    return {
      label,
      important:false, 
      done:false,
      id:this.maxId++,
    }
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
  addItem = (text) =>{
    // e.preventDefault();
    //generator id
    const newItem = this.createTodoItem(text);
    this.setState(({ todoList }) =>{
      const newArray =[
        ...todoList,
        newItem,
      ]
      return {
        todoList: newArray
      }
    })
  }
  onToggleDone =(id) => {
    this.setState(({ todoList }) =>{
      const idx1 = todoList.findIndex((el) => el.id === id);
      const oldItem = todoList[idx1];
      const newItem = {...oldItem, done:!oldItem.done}
      const newArray = [...todoList.slice(0,idx1), newItem, ...todoList.slice(idx1+1)];
      return{
        todoList:newArray
      }
        // console.log(newArray)
    })
    //1. оновити обєкс  
    
    //2.новий масив
  }
  onToggleImportant =(id) => {
    this.setState(({ todoList }) =>{
      const idx = todoList.findIndex((el) => el.id === id);
      const oldItem = todoList[idx];
      const newItem = {...oldItem, important:!oldItem.important}
      const newArray = [...todoList.slice(0,idx), newItem, ...todoList.slice(idx+1)];
      return{
        todoList:newArray
      }
        // console.log(newArray)
    })
  }
  onSearchChange = (term) =>{
    this.setState({term});
  }
  onFilterChange = (filter) =>{
    this.setState({filter});
  }

  search(items,term){
    // console.log(items.length);

    if(term.length === 0){
      return items;
    }
    return items.filter((item) =>{
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  filter(items,filter){
    // console.log();
    switch(filter){
      case 'all': 
        return items;
      case 'active': 
        return items.filter((item) => !item.done);
      case 'done': 
        return items.filter((item) => item.done);
      default: 
        return items;
    }
  }
 render(){
    const {todoList,term,filter} = this.state;
    const visibleItems = this.filter(this.search(todoList,term),filter)

    const doneCount = todoList.filter((el) => el.done).length;
   
    const todoCount = todoList.length - doneCount;
    
    return(
        <div className='todo-app'>
     
        <AppHeader toDo = {doneCount} done = {todoCount}/>
        <div className = "top-panel d-flex">
            <SearchPanel onSearchChange ={this.onSearchChange} />
            <ItemStatusFilter 
            filter = {filter} 
            onFilterChange = {this.onFilterChange} />
        </div>    
            <TodoList todos = {visibleItems} 
            onDeleted = {this.deleteItem} 
            onToggleDone ={this.onToggleDone} 
            onToggleImportant = {this.onToggleImportant}/>
            <ItemAddForm onItemAdded={this.addItem} />
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