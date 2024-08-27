import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  const [utenti, setUtenti] = useState([]);

  useEffect(() => {
    // Fare una richiesta al file PHP
    fetch('http://dasff2.altervista.org/api/getTest.php')
      .then(response => response.json())
      .then(data => setUtenti(data))
      .catch(error => console.error('Errore:', error));
  }, []);

  return (
    <div>
      <h1>Elenco Utenti</h1>
      <ul>
        {utenti.map(utente => (
          <li key={utente.test}>
            {utente.test} 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
