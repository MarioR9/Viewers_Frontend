import React from 'react';
import Views from './Components/Views'
import NavBar from './Components/Navigation'
import './App.css';

function App() {
  return (
    <div className="App">
    <div>
     <NavBar/>
    </div>
     <div className="Center-Container">
     <Views/>
     </div>
    </div>
  );
}

export default App;
