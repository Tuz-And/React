// import React from 'react';
import React,{Component} from 'react';
import './todo-list-item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
// import { ReactComponent } from '*.svg';

 
export default class TodoListItem extends Component{
    // constructor(){
    //     super()
    //     this.onLabelClick(){
    //          console.log(`Done: ${this.props.label}`)
    //     }
    // }
    // state = {
    //     done:false,
    //     important:false,
    // }
    // onLabelClick = () => {
    //   this.setState(({ done })=>{
    //       return {
    //             done:!done
    //       }
    //   })
    // }
    // onMarkInportant = () =>{
    //     this.setState(({ important })=>{
    //         return {
    //             important:!important
    //         }
    //     })
    // }

    render(){
        // const {label,important} = this.props;
        let classNames = 'todo-list-item ';
        const {label,onDeleted,onToggleDone,onToggleImportant,done,important} = this.props;
        // const{done,important} = this.state;
        if(done){
            classNames +='done '
        }
        if(important){
            classNames +='important '
        }
        // const style = {
        //     color:important ? 'blue': 'inherit',
        //     fontWeight: important ? 'bold' : 'normal'
        // }
        return (
            <span className={classNames}>
                <span  className = 'todo-list-item-label' onClick = {onToggleDone}>{label}</span>
                <span>
                        <button className='float-right btn btn-outline-danger btn-sm' onClick = {onToggleImportant}><FontAwesomeIcon icon={faExclamation} />     </button>
                        <button className='float-right btn btn-outline-success btn-sm' onClick = {onDeleted}><FontAwesomeIcon icon={faTrash} />     </button>
                </span>
            </span>
        );
    }
}

// const TodoListItem = ( {label,important=false}) =>{
//     // console.log(props.label);
//     // const {label,important} = props;
//     const style = {
//         color:important ? 'red': 'black',
//         fontWeight: important ? 'bold' : 'normal'
//     }
// return (
//     <span className=''>
//         <span style ={style} className = 'todo-list-item'>{label}</span>
//         <span>
//              <button className='float-right btn btn-outline-danger btn-sm'><FontAwesomeIcon icon={faExclamation} />     </button>
//              <button className='float-right btn btn-outline-success btn-sm'><FontAwesomeIcon icon={faTrash} />     </button>
//         </span>
//     </span>
// );
// }   

