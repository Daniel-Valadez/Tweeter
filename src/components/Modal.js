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

function Modal(props){
    function cancelHandler(){
        props.onCancel(); 
    }

    //The confirmation needs to the add a Twit to the DOM
    function confirmHandler(){

        //This will be the function to add to the DOM. 
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
                        <textarea id="twit-text-input"></textarea>
                    </div>
                    <div className="twit-input-element">
                        <label for="twit-attribution-input">Author</label>
                        <input type="text" id="twit-attribution-input"></input>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="modal-cancel-button" onClick={cancelHandler}>Cancel</button>
                    <button type="button" className="modal-accept-button">Create Twit</button>
                </div>
            </div>
        </div>
    )
}

export default Modal; 