/*eslint jsx-quotes: ["error", "prefer-double"]*/

import React from 'react';
import style from './footer.css';
import layout from '../layout.css';
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render () {
    return (
      <footer className={style.footer}>
        <div className={layout.container}>
          <div className={style.linkSection}>
            <div className={style.logo}></div>
            <div className={style.linkContainer}>
              <Link className={style.link} to="/about">Nosotros</Link>
              <Link className={style.link} to="/contact">Contacto</Link>
              <a className={style.link} href="https://www.facebook.com/prototech" target="_blank">
                Síguenos:
                <div className={style.facebook}></div>
              </a>
            </div>
          </div>
        </div>
        <small className={style.disclaimer}>
          &copy; {(new Date()).getFullYear()} ProtoTech. Todos los derechos reservados.
        </small>
      </footer>
    );
  }
}
