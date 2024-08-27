import './Main.css';
import './Login.css';

import React, { useState } from 'react';

function Login({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Previeni l'azione di submit predefinita del form

        try {
            console.log('Invio della richiesta...');

            const response = await fetch('http://dasff2.altervista.org/api/Utenti.php?method=getUtente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    username: username,
                    password: password,
                }),
            });

            // Controlla lo stato della risposta
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Leggi la risposta come testo per debug
            const textResponse = await response.text();
            console.log('Risposta testuale:', textResponse);

            // Prova a parsare il testo come JSON
            const jsonResponse = JSON.parse(textResponse);
            console.log('Dati ricevuti:', jsonResponse);
          
            // Aggiornare lo stato con i dati ottenuti
            setData(jsonResponse);

            // Chiamare la funzione onLoginSuccess se la risposta è corretta
            if(jsonResponse.length === 0) {
                alert('Dati inseriti non validi');
            }else{
                onLoginSuccess();
            }

        } catch (error) {
            setError(error.message);
            console.error('Errore:', error);
        }
    };

    return (
        <div className='defaultView'>
            <div className='log-box'>
                <form onSubmit={handleSubmit} className='formLog'>
                    <p className='user-label'>Username:</p>
                    <input
                        className='user-input'
                        type='text'
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Inserisci username"
                    />

                    <p className='pass-label'>Password:</p>
                    <input
                        className='pass-input'
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Inserisci password"
                    />

                    <button className='login-button' type='submit'>Login</button>
                </form>
                {error && <p className='error-message'>Errore: {error}</p>}
                {data && <pre className='data-output'>{JSON.stringify(data, null, 2)}</pre>}
            </div>
        </div>
    );
}

export default Login;
