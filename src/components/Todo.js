/*This is responsible for the delete button on each card.*/

import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){
    //Hide modal is set to be false at first. 
    //When useState updates, then we will have the showModal accept a true value. 
    const [ hideModal, showModal ] = useState(false); //This will always return an  array of two elements. 

    /*Create an event handling function to delete stuff*/
    function deleteHandler(){
        showModal(true); 
    }

    function closeModal(){
        showModal(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {hideModal && <Modal onCancel={closeModal} onConfirm={closeModal} />}
            {hideModal && <Backdrop onClick={closeModal} />}
        </div>
    ); 
}

export default Todo; 