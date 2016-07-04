/*eslint jsx-quotes: ["error", "prefer-double"]*/

import React from 'react';
import style from './title-section.css';

export default class TitleSection extends React.Component {
  render () {
    var divStyle = { backgroundImage: `url(${this.props.img})` };
    return (
      <div className={style.titleSection} style={divStyle}>
        <h2 className={style.title}>
          {this.props.children}
        </h2>
      </div>
    );
  }
}
