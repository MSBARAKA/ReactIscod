import React from 'react';
import { useState, useEffect } from 'react';

function Counter(props) {
    const [afficherresultat, setAfficherResultat] = useState(0);

    const incrementer = () => {
        setAfficherResultat(afficherresultat + 1);
    }
    const decrementer = () => {

        setAfficherResultat(afficherresultat - 1);
    }

    useEffect(() => {
        setAfficherResultat(0);
    }, []);
    return (
        <div>
            <h2>Home</h2>
            <div className="navbar-text">{afficherresultat}</div>
            <button onClick={incrementer} className='btn btn-success me-1' >+</button>
            <button onClick={decrementer} className='btn btn-danger'>-</button>
        </div>
    );
}

export default Counter;

//mon code ci-dessus, il fonctionne

//code du formateur ci-dessous

// import React, { useState } from 'react';

// function Counter(props) {
//     const [counter, setCounter] = useState(0);


//     return (
//         <div>
//             <div>{counter}</div>
//             <button onClick={() => setCounter(counter + 1)}>+</button>
//             <button onClick={() => setCounter(counter - 1)}>-</button>
//         </div>
//     );
// }

// export default Counter;

