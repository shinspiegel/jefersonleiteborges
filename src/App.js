import React, { Component } from 'react';

import jefersonPT from './json/jeferson.json';
import jefersonEN from './json/jeferson_ingles.json';

import Nome from './components/Nome';
import Foto from './components/Foto';
import InfoBasico from './components/InfoBasico';
import Formacao from './components/FormacaoAcademica';
import Conhecimentos from './components/Conhecimentos';
import Contato from './components/Contato';
import Portfolio from './components/Portfolio';
import Experiencia from './components/Experiencia';
import ChangeLanguage from './components/ChangeLanguage.js';

class App extends Component {
  state = {
    language: 'BR',
    info: { ...jefersonPT },
  };

  handleLanguage() {
    if (this.state.language === 'BR') {
      this.setState({ language: 'EN' });
      //this.setState({ info: { ...jefersonEN } });
    }
    if (this.state.language === 'EN') {
      this.setState({ language: 'BR' });
      //this.setState({ info: { ...jefersonPT } });
    }
  }

  render() {
    return (
      <div className="conteudo">
        <ChangeLanguage changeLang={() => this.handleLanguage()} lang={this.state.language} />
        <Nome nome={this.state.info.basicInfo.name} />
        <Foto foto={this.state.info.basicInfo.foto} />
        <InfoBasico lang={this.state.language} info={this.state.info.basicInfo} />
        <Formacao lang={this.state.language} academica={this.state.info.formacao} />
        <Conhecimentos lang={this.state.language} conhecimentos={this.state.info.conhecimentos} />
        <Contato lang={this.state.language} contato={this.state.info.otherInfo.contato} endereco={this.state.info.otherInfo.endereco} />
        <Experiencia lang={this.state.language} experiencia={this.state.info.experiencia} />
        <Portfolio lang={this.state.language} portfolio={this.state.info.otherInfo.portfolio} />
      </div>
    );
  }
}

export default App;
