/*eslint jsx-quotes: ["error", "prefer-double"]*/

import React from 'react';
import style from './services.css';
import layout from '../../common/layout.css';

export default class Services extends React.Component {
  render () {
    return (
      <div className={style.services}>
        <h3 className={style.title}>Nuestros servicios</h3>
        <div className={layout.container}>
          <div className={style.serviceList}>
            <Service img="/img/home/electronics.jpg">Diseño Electrónico</Service>
            <Service img="/img/home/firmware.jpg">Programación de Firmware</Service>
            <Service img="/img/home/industrial.jpg">Diseño Industrial</Service>
            <Service img="/img/home/printing.jpg">Impresión 3D</Service>
            <Service img="/img/home/iot.jpg">Hardware + Internet (IOT)</Service>
          </div>
        </div>
      </div>
    );
  }
}

class Service extends React.Component {
  render () {
    return (
      <div className={style.service}>
        <div className={style.icon} style={{backgroundImage: 'url(' + this.props.img + ')'}}></div>
        <div className={style.message}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
