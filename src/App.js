import React, { Component } from 'react';
import jeferson from './json/jeferson.json';
import Name from './components/name';
import Foto from './components/foto';



class App extends Component {
  render() {

    //console log json file
    console.log(jeferson.basicInfo.photo);

    return (
      <div className='conteudo'>
        <Name nome={jeferson.basicInfo.name} />
        <Foto foto={jeferson.basicInfo.foto} />
        <div className='infoBasico'>Basico</div>
        <div className='academica'>formacao academica</div>
        <div className='conhecimentos'>lista conhecimentos</div>
        <div className='contato'>lista de contato</div>
        <div className='portfolio'>lista portfolio</div>
      </div>
    );
  }
}

export default App;
