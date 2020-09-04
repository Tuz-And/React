import React, {Component} from 'react';
import './search-panel.css'

export default class SearchPanel extends Component{
  state = {
    term:''
  }
  onSearchChange = (e) =>{
    const term = e.target.value;
    this.setState({term});
    this.props.onSearchChange(term);
  }
  render(){
    const searchText = 'enter search text';

    return (
      <input type = 'text' className = 'form-control search-input'  placeholder={searchText}   value = {this.state.term} onChange = {this.onSearchChange} />
    )
  }
}
// const SearchPanel = () =>{
//     
//   } 
// export default SearchPanel;
