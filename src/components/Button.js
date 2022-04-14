/*This is for the button that will allow you to add a twit to the DOM*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Button() {
    const [ hideModal, showModal ] = useState(false); //This will always return an  array of two elements. 

    /*Create an event handling function to delete stuff*/
    function deleteHandler(){
        showModal(true); 
    }

    function closeModal(){
        showModal(false);
    } 

    return (
    <div>
    <button type="button" id="create-twit-button" onClick={deleteHandler}>
        <FontAwesomeIcon icon={faBullhorn} />
    </button>
    {hideModal && <Modal onCancel={closeModal} onConfirm={closeModal} />}
    {hideModal && <Backdrop onClick={closeModal} />}
    </div>
    );
}

export default Button;
