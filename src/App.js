import React, { Component } from 'react';

import jefersonPT from './json/jeferson.json';

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
    language: 'pt',
    info: {...jefersonPT}
  }

  

  render() {

    return (
      <div className='conteudo'>
        <Nome nome={jefersonPT.basicInfo.name} />
        <Foto foto={jefersonPT.basicInfo.foto} />
        <InfoBasico info={jefersonPT.basicInfo} />
        <Formacao academica={jefersonPT.formacao} />
        <Conhecimentos conhecimentos={jefersonPT.conhecimentos} />
        <Contato contato={jefersonPT.otherInfo.contato} endereco={jefersonPT.otherInfo.endereco} />
        <Experiencia experiencia={jefersonPT.experiencia} />
        <Portfolio portfolio={jefersonPT.otherInfo.portfolio} />
      </div>
    );
  }
}

export default App;