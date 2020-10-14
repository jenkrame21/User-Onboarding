import React, { useState } from 'react';
import './App.css';
import Form from './Form'

function App() {

  const [people, setPeople] = useState([]);

  return (
    <div className="App">
      <Form people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
