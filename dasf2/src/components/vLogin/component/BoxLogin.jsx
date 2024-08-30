import '../vLogin.css';
import { useState, useEffect } from 'react';
import handleSubmit from '../vLoginUtils';
function BoxLogin ({onChangeView}) {
    
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [esito, setEsito] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onLogin = async (event) =>
    {
        event.preventDefault(); // Previeni l'azione di submit predefinita del form
        await handleSubmit(username,password, setEsito);
    }
    
    useEffect(() => {
        if (esito === 'OK') {      
            let nextView = 'launchpad';
            onChangeView(nextView); // Passa 'nextView' alla funzione 'onChangeView'
        } else if (esito=== 'KO') {
            alert('Dati inseriti non validi');
        }
    }, [esito]);
    
    

    return (
        <div className='divBoxLogin'>
            <form className='mainForm' onSubmit={onLogin}>
            <p className='labUsername'>Username:</p>
            <input
                        className='inputUsername'
                        type='text'
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Inserisci username"
            />

            
            <p className='labPassword'>Password:</p>
            <input
                        className='inputPassword'
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Inserisci la Password"
            />
                <button className='login-button' type='submit'>Login</button>
            </form>
        </div>
    )
}
export default BoxLogin;