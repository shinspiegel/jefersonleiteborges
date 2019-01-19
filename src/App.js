import React, { Component } from 'react';
import jeferson from './json/jeferson.json';

class App extends Component {
  render() {

    //console log json file
    console.log(jeferson);

    return (
      <div className='conteudo'>
        <div className='infoBasico'>
          <h1 className='infoBasico__titulo'>
            {jeferson.basicInfo.name}
          </h1>
          <div className='infoBasico__caixaFoto'>
            <img className='infoBasico__foto' src='https://scontent.fjoi1-1.fna.fbcdn.net/v/t1.0-9/14212193_10210879094078883_7946143369747319594_n.jpg?_nc_cat=109&_nc_ht=scontent.fjoi1-1.fna&oh=0ff4643e8c374e6a5d0f3472c77e5e4b&oe=5CFE61EC'  />
          </div>
          <div className='informacaoBasica'>
            <div className='informacaoBasica__info'>nascimento</div>
            <div className='informacaoBasica__info'>naturalidade</div>
            <div className='informacaoBasica__info'>estado civil</div>
            <div className='informacaoBasica__info'>sexo</div>
          </div>
        </div>
        <div className='conhecimentos'>
          texto
        </div>
      </div>
    );
  }
}

export default App;
