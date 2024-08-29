import React from 'react';
import './VAnagraficaClientiTab.css'; // Assicurati di avere un CSS per la tabella
import VAnagraficaClienti from './VAnagraficaClienti';

function VAnagraficaClientiTab ({ data })  {

    console.log('data:',data);
    if (!data || data.length === 0) {
        return <p className = 'error'>Nessun dato disponibile</p>;
    }

    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th className='thHeader'>Codice Cliente</th>
                    <th className='thHeader'>Nome</th>
                    <th className='thHeader'>Cognome</th>
                    <th className='thHeader'>Città</th>
                    <th className='thHeader'>CAP</th>
                    <th className='thHeader'>Indirizzo</th>
                    <th className='thHeader'>Telefono</th>
                    <th className='thHeader'>Partita IVA</th>
                    <th className='thHeader'>Email</th>
                    <th className='thHeader'>PEC</th>
                    <th className='thHeader'>Note</th>
                </tr>
            </thead>
            <tbody className='anagraficaClientibody'>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.CODICE_CLIENTE}</td>
                        <td>{item.NOME}</td>
                        <td>{item.COGNOME}</td>
                        <td>{item.CITTA}</td>
                        <td>{item.CAP}</td>
                        <td>{item.INDIRIZZO}</td>
                        <td>{item.TELEFONO}</td>
                        <td>{item.PARTITA_IVA}</td>
                        <td>{item.EMAIL}</td>
                        <td>{item.PEC}</td>
                        <td>{item.NOTE}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default VAnagraficaClientiTab;
