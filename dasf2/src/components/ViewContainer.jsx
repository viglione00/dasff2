import React, { useState } from 'react';
import Login from "./Login";
import TopToolbar from './TopToolbar';
import Launchpad from './Launchpad';
import './Main.css';
function ViewContainer ()
{
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
            return <Launchpad />;

            /*
          case 'gestioneClienti':
            return <MGestioneClienti />; */
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