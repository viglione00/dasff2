const handleSubmit = async (username, password, setEsito) => {
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

        // Leggi la risposta come testo
        const textResponse = await response.text();
        console.log(textResponse);

        const jsonResponse = JSON.parse(textResponse);
        
        if (jsonResponse !== null) {
            setEsito('OK');
        }else{ setEsito ('KO');}
        
    } catch (error) {
        console.error('Errore:', error);
        setEsito('Errore');
    }
};

export default handleSubmit;
