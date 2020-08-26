import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import SearchPanelBottom from '../search-panel-bottom';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = ()=>{
    const todoList = [
        {label: "Drink Coffee", important:false, id:1},
        {label: "Build React App", important:true, id:2 },
        {label: "Drink Tea", important:false, id:3},
    ]  
  return(
    <div className='todo-app'>
 
      <AppHeader toDo = {1} done = {3}/>
      <div className = "top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
        </div>    
            <TodoList todos = {todoList}/>
            <SearchPanelBottom />
    </div>
  )
}

export default App;