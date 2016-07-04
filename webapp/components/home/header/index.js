/*eslint jsx-quotes: ["error", "prefer-double"]*/
import React from 'react';
import style from './header.css';
import LineButton from '../../common/line-button';

export default class Header extends React.Component {
  render () {
    return (
      <section className={style.header}>
        <div className={style.videoContainer}>
          <video className={style.video} src="/img/home/background.mp4" loop autoPlay></video>
        </div>
        <div className={style.message}>
          <h1>
            Tus ideas funcionando<br />
            en el mundo real
          </h1>
          <h2>
            ProtoTech es un estudio de prototipado con experiencia en desarrollo
            de productos de innovación tecnológica.
          </h2>
          <div className={style.messageTriangleRight}></div>
          <div className={style.messageTriangleLeft}></div>
        </div>
        <div className={style.buttonContainer}>
          <LineButton href="/contact">Contáctanos</LineButton>
        </div>
      </section>
    );
  }
}
