import React from 'react';
import './search-panel-bottom.css'

const SearchPanelBottom = () =>{
    const searchText= 'What needs to be done'

    return (
      <span className='d-flex search-input-bottom'>
          <input className='form-control '   placeholder={searchText} />
          <button className='btn btn-outline-secondary btn-bottom'>Add Item</button>
      </span>
    )
  } 
export default SearchPanelBottom;
