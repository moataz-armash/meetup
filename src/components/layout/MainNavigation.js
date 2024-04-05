import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <input
        type="checkbox"
        id="nav-toggle"
        hidden
        className={classes.navToggle}
      />
      <label htmlFor="nav-toggle" className={classes.navIcon}>
        <div className={classes.navIconLine}></div>
      </label>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/" className={classes.navLink}>
              All Meetups
            </Link>
          </li>
          <li>
            <Link to="/new-meetup" className={classes.navLink}>
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to="/favorites" className={classes.navLink}>
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
