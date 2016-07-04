/*eslint jsx-quotes: ["error", "prefer-double"]*/

import React from 'react';
import TitleSection from '../common/title-section';
import layout from '../common/layout.css';
import style from './about.css';
import teamMember from './team-member.css';

export default class About extends React.Component {
  render () {
    return (
      <div className={style.about}>
        <TitleSection img="/img/about/solder-bg.jpg">
          Nosotros
        </TitleSection>
        <section className={`${layout.flexContainer} ${style.mapSection}`}>
          <div className={style.map}></div>
          <div className={style.who}>
            <h3>
              Contamos con la experiencia para desarrollar prototipos de productos usando una
              metodología que permite dar pasos sólidos desde la conceptualización hasta la
              manufactura.
            </h3>
            <p>
              ProtoTech es una empresa ubicada en <strong>Hermosillo, Sonora, México</strong>.
              Es fundada en 2016 por Antonio Bretón y Javier Rosas, cuya trayectoria les ha
              dado gran experiencia en áreas como Diseño Industrial, Desarrollo de Software y
              Diseño Electrónico.
            </p>
          </div>
        </section>
        <section className={style.statements}>
          <div className={layout.flexContainerWrap}>
            <div className={style.statement}>
              <h2 className={style.title}>Misión</h2>
              <p>
                Poner al alcance de las empresas el conocimiento y los procesos necesarios para
                desarrollar productos de innovación tecnológica.
              </p>
            </div>
            <div className={style.statement}>
              <h2 className={style.title}>Visión</h2>
              <p>
                Ser el estudio de prototipado más influyente de México y posicionar a las empresas
                del país como potencias en innovación y generación de patentes a nivel mundial.
              </p>
            </div>
          </div>
        </section>
        <section className={style.team}>
          <h2 className={style.title}>Equipo</h2>
          <div className={`${layout.flexContainerWrap} ${style.spaceAround}`}>
            <TeamMember img="/img/about/brets.jpg" name="Antonio Bretón" position="CEO">
              Diseño industrial y electrónica
            </TeamMember>
            <TeamMember img="/img/about/javs.jpg" name="Javier Rosas" position="CTO">
              Programación de firmware y software
            </TeamMember>
          </div>
        </section>
      </div>
    );
  }
}

class TeamMember extends React.Component {
  render () {
    return (
      <div className={teamMember.member}>
        <div className={teamMember.frame}>
          <img src={this.props.img} alt={this.props.name} className={teamMember.picture} />
        </div>
        <div className={teamMember.name}>
          {this.props.name}
        </div>
        <div className={teamMember.position}>
          {this.props.position}
        </div>
        <div className={teamMember.description}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
