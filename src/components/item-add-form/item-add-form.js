import React, {Component} from 'react';
import './item-add-form.css'


export default class ItemAddForm extends Component{
  state ={
    label:' '
  }
  onLabelChange = (e) => {
    this.setState({
      label:e.target.value,
    })
        // console.log(e.target.value);
  }
  onSubmit =(e) =>{
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    })
  }
  render(){
      // const searchText= 'What needs to be done';
      
      return (
        <form className='d-flex item-add-form' onSubmit ={this.onSubmit}>
            <input type='text' className='form-control '   placeholder='What needs to be done' onChange = {this.onLabelChange} value = {this.state.label}/>
            <button className='btn btn-outline-secondary btn-bottom' onClick={() => this.props.onItemAdded}>Add Item</button>
        </form>
      )
  }
}

