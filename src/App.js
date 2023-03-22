import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [prices, setPrices] = useState([]);
    const [chosenCountry, setChosenCountry] = useState("ee");

    useEffect(() => {
        fetch("http://localhost:3000/nord-pool-price/" + chosenCountry)
            .then(res => res.json())
            .then(json => {
                setPrices(json);
            });
    }, [chosenCountry]);

    return (
        <div>
            <button onClick={() => setChosenCountry("fi")}>Soome</button>
            <button onClick={() => setChosenCountry("ee")}>Eesti</button>
            <button onClick={() => setChosenCountry("lv")}>Läti</button>
            <button onClick={() => setChosenCountry("lt")}>Leedu</button>
            <table style={{marginLeft: "100px"}}>
                <thead>
                <th style={{border: "1px solid #ddd", padding: "12px", backgroundColor: "#04AA6D"}}>Ajatempel</th>
                <th style={{border: "1px solid #ddd", padding: "12px", backgroundColor: "#04AA6D"}}>Hind</th>
                </thead>
                <tbody>
                <div style={{position: "absolute", left: "30px"}}>{chosenCountry}</div>
                {prices.map(data =>
                    <tr key={data.timestamp}>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>{new Date(data.timestamp * 1000).toISOString()}</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>{data.price}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default App;