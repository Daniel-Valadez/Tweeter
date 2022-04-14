/*This is the file responsible for creating the modal overlay*/
/*function Modal(props){
    function cancelHandler(){
        props.onCancel(); 
    }

    function confirmHandler(){
        props.onConfirm(); 
    }

    return(
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
    );
}*/

import { useState, useRef } from 'react';

function Modal(props){
    const authorInput = useRef(null); 
    const twitInput = useRef(null); 

    function cancelHandler(){
        props.onCancel(); 
    }

    //The confirmation needs to the add a Twit to the DOM
    function confirmHandler(){
        //Add to the DOM and then close the modal. 
        
        props.onConfirm();
    }
    return(
        <div id="create-twit-modal">
            <div className="modal-dialog">
                <div className="modal-header">
                    <h3>Create a Twit</h3>
                    <button type="button" className="modal-close-button" onClick={cancelHandler}>&times;</button>
                </div>
                <div className="modal-body">
                    <div className="twit-input-element">
                        <label for="twit-text-input">Twit text</label>
                        <textarea id="twit-text-input" ref={twitInput}></textarea>
                    </div>
                    <div className="twit-input-element">
                        <label for="twit-attribution-input">Author</label>
                        <input type="text" id="twit-attribution-input" ref={authorInput}></input>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="modal-cancel-button" onClick={cancelHandler}>Cancel</button>
                    <button type="button" className="modal-accept-button" onClick={confirmHandler}>Create Twit</button>
                </div>
            </div>
        </div>
    )
}

export default Modal; 