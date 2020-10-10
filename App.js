import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Tiendas from "./Pages/Tiendas";
import Contacto from "./Pages/Contacto";
import Cuenta from "./Pages/Cuenta"; 
import './App.css';
import Img from "./resources/descarga.png";

function App() {
  return (
    <body>
      <header className="App-header">
        <img src={Img} className="App-logo" alt="descarga" />
        <BrowserRouter>
        <Switch>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/tiendas" component={Tiendas}/>
          <Route exact path="/contacto" component={Contacto}/>
          <Route exact path="/cuenta" component={Cuenta}/>
        </Switch>
        </BrowserRouter>
      </header>
    </body>
  );
}

export default App;
