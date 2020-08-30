import React, {Component} from 'react';
import './item-add-form.css'


export default class ItemAddForm extends Component{
  render(){
      const searchText= 'What needs to be done';

      return (
        <form className='d-flex item-add-form'>
            <input type='text' className='form-control '   placeholder={searchText} />
            <button className='btn btn-outline-secondary btn-bottom'>Add Item</button>
        </form>
      )
  }
}

