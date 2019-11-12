import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Views from './Components/Views'
import NavBar from './Components/Navigation'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>  
        <Route path="/">
          <div className="App">
          <div>
          <NavBar/>
          </div>
          <div className="Center-Container">
          <Views/>
          </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
