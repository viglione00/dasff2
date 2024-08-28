import './Main.css';
import './VAnagraficaClienti.css';

import React, { useState } from 'react';
function VAnagraficaClienti({ onChangeView}) {

    return(
        <>
        <div className='defaultView'>
            <div className='VAnagraficaCliente'>
                <p className='labCodiceCliente'>Codice Cliente</p>
                <input className='inputCodiceCliente' type='text' placeholder='Codice Cliente'/>

                
                <p className='labNome'>Nome</p>
                <input className='inputNome' type='text' placeholder='Nome'/>

                
                <p className='labCognome'>Cognome</p>
                <input className='inputCognome' type='text' placeholder='Cognome'/>

                
                <p className='labIndirizzo'>Indirizzo</p>
                <input className='inputIndirizzo' type='text' placeholder='Indirizzo'/>

                <p className='labCitta'>Città</p>
                <input className='inputCitta' type='text' placeholder='Città'/>

                <p className='labNCell'>Recapito tel:</p>
                <input className='inputNCell' type='text' placeholder='Recapito telefonico'/>

                <p className='labEmail'>Email</p>
                <input className='inputEmail' type='text' placeholder='Email'/>

                <p className='labPec'>Pec</p>
                <input className='inputPec' type='text' placeholder='Pec'/>

                <btn className='btnFilter'>Filtra</btn>

                
            </div>
        </div>
        </>
    )
}
export default VAnagraficaClienti;