/*eslint jsx-quotes: ["error", "prefer-double"]*/

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Home from '../pages/home';

import style from './app.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1 className={style.title}>ProtoTech</h1>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

class About extends React.Component {
  render () {
    return (
      <h2>This is about</h2>
    );
  }
}

class NotFound extends React.Component {
  render () {
    return (
      <h2>404: Not found</h2>
    );
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('root'));

