import React from 'react';
import MisDatos from './components/Datos'

import Navegacion from './components/Navegacion'
import ListMovie from './components/ListCard'

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Zapatos from './components/Zapatos';







function App() {
  return (
    <Router>
     <div className="App">
       <Navegacion/>
       </div>
       <Switch>
         <Route path="/" component={ListMovie} exact/>
         <Route path="/zapatos" component={Zapatos}/>
  <Route path="/obtenerdatos/:tipo/:talla/:cantidad/:marca" children={<MisDatos/> } component={MisDatos}/>
       </Switch>

     
     </Router>
  );
}


export default App;
