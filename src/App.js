import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";

class App extends Component {
  state = {
    noticias: [],
  };

  componentDidMount() {
    this._consultarNoticias();
  }

  _consultarNoticias = async (categoria = "general") => {
    const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=d3e3c23a83f14ca9b5907f1cb8a78438`;
    const dataRequest = {
      method: "GET",
    };

    const respuesta = await fetch(url, dataRequest);
    const noticiasApi = await respuesta.json();
    // console.log(noticias.articles[0]);

    this.setState({
      noticias: noticiasApi.articles,
    });
  };
  render() {
    return (
      <Fragment>
        <Header titulo="Noticias React API" />

        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this._consultarNoticias} />
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

export default App;
