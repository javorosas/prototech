/*eslint jsx-quotes: ["error", "prefer-double"]*/

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import NavBar from './components/common/navbar';
import Footer from './components/common/footer';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
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
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="contact" component={Contact} />
      <Route path="about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('root'));

