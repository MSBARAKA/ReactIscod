// import React, { useCallback, useEffect, useState } from 'react';

// function Storie(props) {

//     const [counter, setCounter] = useState(0);
//     const [history, setHistory] = useState([]);

//     useEffect(() => {
//         setHistory([...history, counter]);
//     }, [counter]);

//     useCallback(() => {
//         setHistory([]);
//     }, []);

//     console.log(history);
//     return (
//         <div>
//             <h2>Other Counter{counter}</h2>
//             map sur history
//             <ul>
//                 {history.map((history, index) => <li key={index}>{history}</li>
//                 )}
//             </ul>
//             <button onClick={() => setHistory([])}>Reset</button>

//             <div className="navbar-text">{counter % 2 ? 'nombre impair' : 'nombre pair'}</div>
//             <button onClick={() => setCounter(counter + 1)}>+</button>
//             <button onClick={() => setCounter(counter - 1)}>-</button>
//         </div>
//     );
// }

// export default Storie;

//   un historique apparait quand je clique sur le bouton + ou -.Quand j'actualise la page l'historique disparait. Je ne savais pas que je devais stocker les données

// code du formateur ci-dessous


import React, { useCallback, useEffect, useState } from 'react';

function Storie(props) {
    const [counter, setCounter] = useState(0);
    const [history, setHistory] = useState([]);
    // ci-dessus c'est réactive
    
    // remplir l'historique avec la valeur actuelle du compteur = Usecallback
    
    const histoCounter = useCallback(() => {
        setHistory([...history, counter]);
    }, [counter, history]);

    return (
        <div>
        <h2>Other Counter{counter}</h2>
        <div className="navbar-text">{counter % 2 ? 'nombre impair':'nombre pair'}</div>
        <button onClick={() => setCounter (counter + 1)}>+</button>
        <button onClick={() => setCounter (counter - 1)}>-</button>
        <br/>
        {history.map((histo, index) => <div key={index} >Valeur {index}:{histo}</div>)}
        </div>
    );
}

export default Storie;

