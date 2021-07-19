import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TestApp from './components/TestApp';

const App:React.FC<{}> = () => {
  return (
    <div className="App">
      <TestApp />
    </div>
  );
}

export default App;
