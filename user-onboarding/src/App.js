import React, { useState } from 'react';
import './App.css';
import Form from './Form'

function App() {

  const [people, setPeople] = useState([]);

  return (
    <div className="container">
      {/* App links to Form component and sends 'people' and 'setPeople' as props */}
      <Form people={people} setPeople={setPeople}/>
      {/* Make separate component for each person like 'MemberList'. Displaying data sent through props*/}
    </div>
  );
}

export default App;
