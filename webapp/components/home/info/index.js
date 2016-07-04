/*eslint jsx-quotes: ["error", "prefer-double"]*/

import React from 'react';
import { Link } from 'react-router';
import style from './info.css';
import layout from '../../common/layout.css';
import link from '../../common/link.css';

export default class Info extends React.Component {
  render () {
    return (
      <div className={style.info}>
        <div className={style.band}></div>
        <div className={layout.container}>
          <div className={style.cardsContainer}>
            <InfoCard img="/img/home/product.jpg" title="¿Por qué desarrollar tus propios productos?">
              <p>
                Toda empresa llega a un punto en su trayectoria en la que debe encontrar nuevas estrategias
                de crecimiento y se ve en la necesidad de innovar. Al desarrollar sus propios productos,
                tu empresa diversifica sus ingresos y abre la puerta a nuevos mercados.
              </p>
              <p>
                Es un paso natural en el proceso evolutivo de los negocios, que para muchos es una barrera
                difícil de superar.
              </p>
            </InfoCard>
            <InfoCard img="/img/home/studio.jpg" title="¿Qué es un estudio de prototipado?">
              <p>
                Un estudio de prototipado te ayuda a implementar una metodología que permite optimizar
                de manera inteligente los recursos durante el desarrollo del producto.
              </p>
              <p>
                Mucho más allá de ser sólo un taller, el estudio aporta el conocimiento necesario y lleva de
                la mano a tu empresa para reducir riesgos durante el proceso de pasar tu idea del concepto a
                la realidad.
              </p>
            </InfoCard>
            <InfoCard img="/img/home/help.jpg" title="¿Cómo te ayudamos?">
              <p>
                ProtoTech lleva a cabo la gestión y desarrollo de tus prototipos, esto es desde la
                conceptualización hasta su fabricación, siguiendo cada una de las fases de desarrollo de
                producto.
              </p>
              <Link className={link.link} to="/contact">
                Pregúntanos cómo
              </Link>
            </InfoCard>
          </div>
        </div>
      </div>
    );
  }
}

class InfoCard extends React.Component {
  render () {
    return (
      <div className={style.infoCard}>
        <div style={{ backgroundImage: 'url(' + this.props.img + ')' }} className={style.icon}></div>
        <h3 className={style.title}>{this.props.title}</h3>
        {this.props.children}
      </div>
    );
  }
}
