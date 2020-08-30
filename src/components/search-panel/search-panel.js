import React, {Component} from 'react';
import './search-panel.css'

export default class SearchPanel extends Component{
  render(){
    const searchText = 'enter search text';

    return (
      <input className = 'form-control search-input'  placeholder={searchText}    />
    )
  }
}
// const SearchPanel = () =>{
//     
//   } 
// export default SearchPanel;
