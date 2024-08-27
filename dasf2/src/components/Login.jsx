import './Main.css';
import './Login.css';

import React, { useState } from 'react';
function Login ({ onLoginSuccess }) {
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Gestore di evento per aggiornare lo stato dell'username
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    // Gestore di evento per aggiornare lo stato della password
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    // Funzione asincrona per gestire il submit
    const handleSubmit = async() => {
        try {

            console.log('sono qui');
            // Fare una richiesta al file PHP
            const response =  await fetch('http://dasff2.altervista.org/api/Utenti.php?method=getUtente');
            console.log(response);
            
            // Controllare se la risposta è ok
            if (!response.ok) {
                console.log('Network response was not ok');
            }
    
            // Convertire la risposta in JSON
            const data =   await response.json();
            console.log(data);
            // Aggiornare lo stato con i dati ottenuti
            setData(data);
        } catch (error) {
            // Gestire gli errori
            console.error('Errore:', error);
        }
        console.log('fine');
    };
    
    // Funzione che viene chiamata al clic del bottone
    const tryLog = () => {
        alert(`Username: ${username}\nPassword: ${password}`);
    };

    return(
        <>
            <div className='defaultView'>
                <div className='log-box'>
                    
                    <form onSubmit={handleSubmit} className='formLog'>
                        <p className='user-label'>Username:</p>
                        <input className='user-input' 
                               type='text' 
                               value={username} 
                               onChange={handleUsernameChange} />

                        <p className='pass-label'>Password:</p>
                        <input className='pass-input' 
                                type='password' 
                                value={password} 
                                onChange={handlePasswordChange} />

                        <button className='login-button' type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;