import './Main.css';
import './VAnagraficaClienti.css';
import VAnagraficaClientiTab  from './VAnagraficaClientiTab';
import React, { useState, useEffect } from 'react';

function VAnagraficaClienti({ onChangeView }) {

    let filteredTab = [];
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Verifica se è mobile
    const [showFilters, setShowFilters] = useState(false);

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const [codiceCliente, setCodiceCliente] = useState('');
    const [nome, setNome] = useState('');
    const [cognome, setCognome] = useState('');
    const [indirizzo, setIndirizzo] = useState('');
    const [citta, setCitta] = useState('');
    const [email, setEmail] = useState('');
    const [pec, setPec] = useState('');
    const [ncell, setNCell] = useState('');
    
    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };
    const handleCognomeChange = (event) => {
        setCognome(event.target.value);
    };
    const handleCodiceClienteChange = (event) => {
        setCodiceCliente(event.target.value);
    };
    
    const handleIndirizzoChange = (event) => {
        setIndirizzo(event.target.value);
    };
    const handleCittaChange = (event) => {
        setCitta(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePecChange = (event) => {
        setPec(event.target.value);
    };
    const handleNCellChange = (event) => {
        setNCell(event.target.value);
    };

    // Funzione per aggiornare la variabile isMobile in base alla larghezza della finestra
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    // Hook che si esegue al montaggio del componente
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const onClickFilter =  async () => {

        try {
            console.log('Invio della richiesta...');

            const response = await fetch('http://dasff2.altervista.org/api/Clienti.php?method=getClienti', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    codiceCliente: codiceCliente,
                    nome: nome,
                    cognome: cognome,
                    indirizzo: indirizzo,
                    citta: citta,
                    email: email,
                    ncell: ncell,
                    pec: pec,
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
               const  formattedData = jsonResponse.map(item => ({
                    CODICE_CLIENTE: item.CODICE_CLIENTE || '',
                    NOME: item.NOME || '',
                    COGNOME: item.COGNOME || '',
                    CITTA: item.CITTA || '',
                    CAP: item.CAP || '',
                    INDIRIZZO: item.INDIRIZZO || '',
                    TELEFONO: item.TELEFONO || '',
                    PARTITA_IVA: item.PARTITA_IVA || '',
                    EMAIL: item.EMAIL || '',
                    PEC: item.PEC || '',
                    NOTE: item.NOTE || '',
                }));
                console.log(formattedData);
                filteredTab = formattedData;

            }

        } catch (error) {
            setError(error.message);
            console.log('Errore:', error);
        }

    }

    return (
        <>
            <div className='defaultView'>
                <div className='VAnagraficaCliente'>
                    {/* Su dispositivi mobili, mostra il pulsante Filtra */}
                    {isMobile ? (
                        <>
                            {showFilters && (
                                <div className='filters'>
                                    <p className='labCodiceCliente'>Codice Cliente</p>
                                    <input className='inputCodiceCliente'
                                           type='text' 
                                           placeholder='Codice Cliente'
                                           value={codiceCliente}
                                           onChange={handleCodiceClienteChange} />

                                    <p className='labNome'>Nome</p>
                                    <input className='inputNome' 
                                           type='text' 
                                           placeholder='Nome'
                                           value={nome}
                                           onChange={handleNomeChange} />

                                    <p className='labCognome'>Cognome</p>
                                    <input className='inputCognome' 
                                           type='text' 
                                           placeholder='Cognome'
                                           value={cognome}
                                           onChange={handleCognomeChange} />

                                    <p className='labIndirizzo'>Indirizzo</p>
                                    <input className='inputIndirizzo' 
                                           type='text' 
                                           placeholder='Indirizzo'
                                           value={indirizzo}
                                           onChange={handleIndirizzoChange} />

                                    <p className='labCitta'>Città</p>
                                    <input className='inputCitta' 
                                            type='text' 
                                            placeholder='Città'
                                           value={citta}
                                           onChange={handleCittaChange} />

                                    <p className='labNCell'>Recapito tel:</p>
                                    <input className='inputNCell' 
                                            type='text' 
                                            placeholder='Recapito telefonico'
                                            value={ncell}
                                            onChange={handleNCellChange} />

                                    <p className='labEmail'>Email</p>
                                    <input className='inputEmail' 
                                            type='text' 
                                            placeholder='Email'
                                            value={email}
                                            onChange={handleEmailChange} />

                                    <p className='labPec'>Pec</p>
                                    <input className='inputPec' 
                                            type='text' 
                                            placeholder='Pec'
                                            value={pec}
                                            onChange={handlePecChange} />
                                </div>
                            )}
                            
                            <button className='btnFilter' onClick={() => setShowFilters()}>
                                Filtri
                            </button>
                        </>
                    ) : (
                        // Layout standard per desktop
                        <><p className='labCodiceCliente'>Codice Cliente</p>
                        <input className='inputCodiceCliente'
                               type='text' 
                               placeholder='Codice Cliente'
                               value={codiceCliente}
                               onChange={handleCodiceClienteChange} />

                        <p className='labNome'>Nome</p>
                        <input className='inputNome' 
                               type='text' 
                               placeholder='Nome'
                               value={nome}
                               onChange={handleNomeChange} />

                        <p className='labCognome'>Cognome</p>
                        <input className='inputCognome' 
                               type='text' 
                               placeholder='Cognome'
                               value={cognome}
                               onChange={handleCognomeChange} />

                        <p className='labIndirizzo'>Indirizzo</p>
                        <input className='inputIndirizzo' 
                               type='text' 
                               placeholder='Indirizzo'
                               value={indirizzo}
                               onChange={handleIndirizzoChange} />

                        <p className='labCitta'>Città</p>
                        <input className='inputCitta' 
                                type='text' 
                                placeholder='Città'
                               value={citta}
                               onChange={handleCittaChange} />

                        <p className='labNCell'>Recapito tel:</p>
                        <input className='inputNCell' 
                                type='text' 
                                placeholder='Recapito telefonico'
                                value={ncell}
                                onChange={handleNCellChange} />

                        <p className='labEmail'>Email</p>
                        <input className='inputEmail' 
                                type='text' 
                                placeholder='Email'
                                value={email}
                                onChange={handleEmailChange} />

                        <p className='labPec'>Pec</p>
                        <input className='inputPec' 
                                type='text' 
                                placeholder='Pec'
                                value={pec}
                                onChange={handlePecChange} />

                                
                            <button className='btnFilter' onClick={() => onClickFilter()}>
                                Filtri
                            </button>
                            <div className='anagraficaClientiTab'>
                                <VAnagraficaClientiTab data={filteredTab}/>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default VAnagraficaClienti;
