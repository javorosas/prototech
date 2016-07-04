import React from 'react';
import { Link } from 'react-router';
import style from './nav-link.css';

export default class NavLink extends React.Component {
  static get defaultProps () {
    return {
      to: '#'
    };
  }

  render () {
    return (
      <Link to={this.props.to} className={style.navLink}>
        {this.props.children}
      </Link>
    );
  }
}
