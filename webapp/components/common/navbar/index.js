/*eslint jsx-quotes: ["prefer-double"]*/

import React from 'react';
import { Link } from 'react-router';
import NavLink from './nav-link';
import style from './navbar.css';
import layout from '../layout.css';

export default class NavBar extends React.Component {
  render () {
    return (
      <nav className={style.navbar}>
        <div className={layout.container}>
          <div className={layout.flex}>
            <Link to="/" className={style.logo}></Link>
            <div className={style.navItems}>
              <NavLink to="/about">Nosotros</NavLink>
              <NavLink to="/contact">Contacto</NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
