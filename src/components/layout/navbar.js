/*This is for the navbar at the top of the page.*/
import classes from "./navbar.module.css";
import cx from 'classnames'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandLizard, faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <header>
      <a href="#">
        <h1 className={classes.siteTitle}>
          <FontAwesomeIcon icon={faHandLizard} />
          tweeter
        </h1>
      </a>

      <nav className={classes.navbar}>
        <ul className={classes.navlist}>
          <li
            className={cx(
              classes.navitem,
              classes.navlink,
              classes.active
            )}
          >
            <a href="#">Home</a>
          </li>
          <li className={cx(classes.navitem, classes.navlink)}>
            <a href="#">Trending</a>
          </li>
          <li className={cx(classes.navitem, classes.navlink)}>
            <a href="#">People</a>
          </li>
          <li className={cx(classes.navitem, classes.navbarSearch)}>
            <input
              type="text"
              className={classes.navbarSearchInput}
              placeholder="Search..."
            />
            <button type="button" className={classes.navbarSearchButton}>
              <FontAwesomeIcon icon={faSearch} /> 
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
