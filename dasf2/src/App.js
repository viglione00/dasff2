import logo from './logo.svg';
import './App.css';
import ViewContainer from './components/ViewContainer';
import React, { useState, useEffect } from 'react';
import Login from './components/vLogin/view/Login';
function App() {
  const [utenti, setUtenti] = useState([]);

  useEffect(() => {
    // Fare una richiesta al file PHP
    fetch('http://dasff2.altervista.org/api/getTest.php')
      .then(response => response.json())
      .then(data => setUtenti(data))
      .catch(error => console.error('Errore:', error));

      
  console.log(utenti);
  }, []);


  return (
    <div>
      <ViewContainer/>
    </div>
  );
}

export default App;
