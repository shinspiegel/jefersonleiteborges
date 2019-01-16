import React, { Component } from "react";
import jeferson from "./json/jeferson.json";

class App extends Component {
  render() {

    //console log json file
    console.log(jeferson);

    return (
      <div className="conteudo">
        <div className="header">
          <h1 className="header_heading">{jeferson.basicInfo.name}</h1>
        </div>
      </div>
    );
  }
}

export default App;
