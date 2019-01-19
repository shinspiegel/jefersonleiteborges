import React, { Component } from 'react';

import jeferson from './json/jeferson.json';

import Name from './components/Name';
import Foto from './components/Foto';
import InfoBasico from './components/InfoBasico';
import Formacao from './components/FormacaoAcademica';
import Conhecimentos from './components/Conhecimentos';



class App extends Component {
  render() {
    console.log(jeferson)

    return (
      <div className='conteudo'>
        <Name nome={jeferson.basicInfo.name} />
        <Foto foto={jeferson.basicInfo.foto} />
        <InfoBasico info={jeferson.basicInfo} />
        <Formacao academica={jeferson.formacao} />
        <Conhecimentos conhecimentos={jeferson.conhecimentos} />
        <div className='contato'>lista de contato</div>
        <div className='portfolio'>lista portfolio</div>
      </div>
    );
  }
}

export default App;
