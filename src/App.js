import React, { Component } from 'react';

import jeferson from './json/jeferson.json';

import Nome from './components/Nome';
import Foto from './components/Foto';
import InfoBasico from './components/InfoBasico';
import Formacao from './components/FormacaoAcademica';
import Conhecimentos from './components/Conhecimentos';
import Contato from './components/Contato';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <div className='conteudo'>
        <Nome nome={jeferson.basicInfo.name} />
        <Foto foto={jeferson.basicInfo.foto} />
        <InfoBasico info={jeferson.basicInfo} />
        <Formacao academica={jeferson.formacao} />
        <Conhecimentos conhecimentos={jeferson.conhecimentos} />
        <Contato contato={jeferson.otherInfo.contato} endereco={jeferson.otherInfo.endereco} />
        <Portfolio portfolio={jeferson.otherInfo.portfolio} />
      </div>
    );
  }
}

export default App;