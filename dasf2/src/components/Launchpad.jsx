import React from 'react';

function Launchpad({ onChangeView }) {
  // Funzione per gestire il click del bottone
  const handleButtonClick = () => {
    let nextView = 'anagraficaClienti';
    onChangeView(nextView); // Passa 'nextView' alla funzione 'onChangeView'
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Anagrafica Clienti</button>
    </div>
  );
}

export default Launchpad;
