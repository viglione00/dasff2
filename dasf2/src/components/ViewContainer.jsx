import React, { useState } from 'react';
import Login from "./Login";
import TopToolbar from './TopToolbar';
import Launchpad from './Launchpad';
import VAnagraficaClienti from './VAnagraficaClienti';
import './Main.css';
function ViewContainer ()
{
    let nextView;
    const [currentView, setCurrentView] = useState('login');

    // Funzione per cambiare la view
    const handleChangeView = (view) => {
      setCurrentView(view);
    };

    const renderView = () => {
        switch (currentView) {
          case 'login':
            return <Login onLoginSuccess={() => handleChangeView('launchpad')} />;
          case 'launchpad':
            return <Launchpad onChangeView={handleChangeView} />;;
          case 'anagraficaClienti':
            return <VAnagraficaClienti onChangeView={ () => handleChangeView(nextView)}/>; 
          default:
            return <Login />;
        }
      };

      return (
        <>
        <div className='TopToolbar'><TopToolbar/></div>
        <div>{renderView()}</div>
        <div></div>
        </>
      )
    
}
export default ViewContainer;