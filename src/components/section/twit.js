import style from "./twit.module.css";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

function Twit(props) {
  return (
    <article className={style.twit}>
      <div className={style.twitIcon}>
          <FontAwesomeIcon icon={faBullhorn} /> 
      </div>
      <div className={style.twitContent}>
        <p className={style.twitText}>
            {props.text}
        </p>
        <p className={style.twitAuthor}>
          <a href="#">{props.author}</a>
        </p>
      </div>
    </article>
  );
}

export default Twit;
