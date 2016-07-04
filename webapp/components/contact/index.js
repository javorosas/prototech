/*eslint jsx-quotes: ["error", "prefer-double"]*/
/* globals fetch H5F */

import React from 'react';
import TitleSection from '../common/title-section';
import { Input, TextArea, FormGroup, Button } from '../common/form';
import style from './contact.css';
import link from '../common/link.css';
import 'whatwg-fetch';

export default class Contact extends React.Component {
  constructor () {
    super();
    this.submitForm = this.submitForm.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = { isError: false, isSent: false, form: {} };
  }

  onValueChange (field) {
    return function (event) {
      var form = this.state.form;
      form[field] = event.target.value;
      this.setState({ form: form });
    }.bind(this);
  }

  submitForm (e) {
    e.preventDefault();
    if (e.target.checkValidity()) {
      this.setState({ isError: false });
      this.sendEmail();
    } else {
      this.setState({ isError: true });
    }
  }

  sendEmail () {
    console.log('Sending email...');
    fetch('/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.form)
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      throw response;
    }).then((data) => {
      this.setState({ isSent: true });
      console.log('Email sent!');
    }).catch((err) => {
      console.log(err);
      this.setState({ isError: true });
    });
  }

  componentDidMount () {
    H5F.setup(document.getElementById('form'));
  }

  render () {
    var error = <p className={style.error}>Por favor revisa que todos los campos sean correctos</p>;
    var form = (
      <form id="form" onSubmit={this.submitForm}>
        <FormGroup>
          <Input required name="name" type="text" placeholder="Nombre completo" onChange={this.onValueChange('name')} />
        </FormGroup>
        <FormGroup>
          <Input name="company" type="text" placeholder="Compañía" onChange={this.onValueChange('company')} />
        </FormGroup>
        <FormGroup>
          <Input required name="email" type="email" placeholder="Correo electrónico" onChange={this.onValueChange('email')} />
        </FormGroup>
        <FormGroup>
          <Input required name="phone" type="text" placeholder="Teléfono" onChange={this.onValueChange('phone')} />
        </FormGroup>
        <FormGroup>
          <TextArea required name="message" rows="4" placeholder="Mensaje" onChange={this.onValueChange('message')} />
        </FormGroup>
        <FormGroup>
          <Button type="submit">
            Enviar
          </Button>
        </FormGroup>
      </form>);
    var sent = (
      <div className={style.sent}>
        <h2>Mensaje enviado</h2>
        <h2>Nos comunicaremos contigo lo más pronto posible.</h2>
      </div>
    );
    return (
      <div className={style.contact}>
        <TitleSection img="/img/contact/circuits-bg.jpg">
          Contáctanos
        </TitleSection>
        <div className={style.formSection}>
          {this.state.isError ? error : null}
          {this.state.isSent ? sent : form}
          <div className={style.write}>
            <p>
              O escríbenos a:
            </p>
            <p>
              <a className={link.link} href="mailto:contacto@prototech.io" target="_blank">
                contacto@prototech.io
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
