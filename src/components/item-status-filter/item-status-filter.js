import React, {Component} from 'react';


import './item-status-filter.css';

export default class ItemStatusFilter extends Component{
    buttons = [
        {name:'all', label:'all'},
        {name:'active', label:'active'},
        {name:'done', label:'done'}
    ]
    render(){
        const {filter,onFilterChange} = this.props;
        const buttons = this.buttons.map(({name,label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info': 'btn-outline-seconbary'
            return(
                <button type='button'
                className = {`btn ${clazz}`} key = {name}
            onClick = {() => onFilterChange(name)}>{label}</button>
            )
        })
        return (
            <div className = "btn-group">
                {buttons}
                {/* <button className="btn btn-outline-info">All</button> */}
                {/* <button className='btn btn-outline-secondary'>Active</button> */}
                {/* <button className='btn btn-outline-secondary'>Done</button> */}
            </div>
        )
    }
} 
