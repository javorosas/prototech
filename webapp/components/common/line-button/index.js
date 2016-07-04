/*eslint jsx-quotes: ["error", "prefer-double"]*/

import React from 'react';
import { Link } from 'react-router';
import style from './line-button.css';

export default class LineButton extends React.Component {
  render () {
    return (
      <Link to={this.props.href} className={style.lineButton}>
        {this.props.children}
      </Link>
    );
  }
}
