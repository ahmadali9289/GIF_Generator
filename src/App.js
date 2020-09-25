import React from 'react';
import './App.css';
import Tag_V1 from './components/Tag_V1';
import Random_V1 from './components/Random_V1';



function App() {
  return (
    <div className="App">
      <h1>Gif Generator Application</h1>
      <div className="main-container">
        <Tag_V1 />
        <Random_V1 />
      </div>
    </div>
  );
}

export default App;
