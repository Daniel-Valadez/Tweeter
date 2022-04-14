/*This is for the button that will allow you to add a twit to the DOM*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

function Button() {
    return (
    <button type="button" className="create-twit-button">
        <FontAwesomeIcon icon={faBullhorn} />
    </button>
    );
}

export default Button;
