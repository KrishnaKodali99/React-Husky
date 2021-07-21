import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Nav-Bar/Nav-Bar';

const App:React.FC<{}> = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <NavBar/>
    </div>
  );
}

export default App;