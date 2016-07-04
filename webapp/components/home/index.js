import React from 'react';
import Header from './header';
import Services from './services';
import Info from './info';

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Services />
        <Info />
      </div>
    );
  }
}
