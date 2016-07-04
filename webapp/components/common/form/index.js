/*eslint jsx-quotes: ["error", "prefer-double"]*/
import React from 'react';
import style from './form.css';

export class Input extends React.Component {
  render () {
    return (
      <input className={style.input} {...this.props} />
    );
  }
}

export class TextArea extends React.Component {
  render () {
    return (
      <textarea className={style.textarea} {...this.props}>
        {this.props.children}
      </textarea>
    );
  }
}

export class FormGroup extends React.Component {
  render () {
    return (
      <div className={style.formGroup}>
        {this.props.children}
      </div>
    );
  }
}

export class Button extends React.Component {
  render () {
    return (
      <button {...this.props} className={style.button}>
        {this.props.children}
      </button>
    );
  }
}
