import React from 'react';
import './search-panel.css'

const SearchPanel = () =>{
    const searchText= 'enter search text'

    return <input className='form-control search-input'
    placeholder={searchText} 
    />
  } 
export default SearchPanel;
