import React from 'react';
import './VAnagraficaClientiTab.css'; // Assicurati di avere un CSS per la tabella
import VAnagraficaClienti from './VAnagraficaClienti';

function VAnagraficaClientiTab ({ data })  {
    if (!data || data.length === 0) {
        return <p className = 'error'>Nessun dato disponibile</p>;
    }

    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th>Codice Cliente</th>
                    <th>Nome</th>
                    <th>Cognome</th>
                    <th>Città</th>
                    <th>CAP</th>
                    <th>Indirizzo</th>
                    <th>Telefono</th>
                    <th>Partita IVA</th>
                    <th>Email</th>
                    <th>PEC</th>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody>
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
