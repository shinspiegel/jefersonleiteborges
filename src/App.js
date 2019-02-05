import React, { Component } from 'react';
import axios from 'axios';

import jefersonPT from './json/jeferson.json';
import jefersonEN from './json/jeferson.json';

import Nome from './components/Nome';
import Foto from './components/Foto';
import InfoBasico from './components/InfoBasico';
import Formacao from './components/FormacaoAcademica';
import Conhecimentos from './components/Conhecimentos';
import Contato from './components/Contato';
import Portfolio from './components/Portfolio';
import Experiencia from './components/Experiencia';

class App extends Component {
  state = {
    language: 'BR',
    info: {...jefersonPT}
  }

  getCountry(url) {
    axios.get(url)
    .then( res => {
      this.identifyLang(res.data.country);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  identifyLang(country) {
    if (country === 'BR') {
      this.setState({info: {...jefersonPT}});
    } else { 
      this.setState({info: {...jefersonEN}});
    }
  } 

  componentWillMount() {
    console.log(`Selected language is: ${this.state.language}`);
    this.getCountry('https://ipinfo.io');
  }

  render() {

    return (
      <div className='conteudo'>
        <Nome nome={jefersonPT.basicInfo.name} />
        <Foto foto={jefersonPT.basicInfo.foto} />
        <InfoBasico info={jefersonPT.basicInfo} />
        <Formacao lang={this.state.language} academica={jefersonPT.formacao} />
        <Conhecimentos lang={this.state.language} conhecimentos={jefersonPT.conhecimentos} />
        <Contato lang={this.state.language} contato={jefersonPT.otherInfo.contato} endereco={jefersonPT.otherInfo.endereco} />
        <Experiencia lang={this.state.language} experiencia={jefersonPT.experiencia} />
        <Portfolio lang={this.state.language} portfolio={jefersonPT.otherInfo.portfolio} />
      </div>
    );
  }
}

export default App;