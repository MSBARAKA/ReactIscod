// import React, { useCallback, useEffect, useState } from 'react';

// function OtherCounter(props) {
//   const [afficherresultat, setAfficherResultat, setPairImpair] = useState(0);

//   const incrementer = () => {
//     setAfficherResultat(afficherresultat + 1);
//   };

//   const decrementer = () => {
//     setAfficherResultat(afficherresultat - 1);
//   };

//   useEffect(() => {
//     setAfficherResultat(0);
//   }, []);

//   const setA = useCallback(() => {
//     setPairImpair(6);
//   }, []);

//   const setB = useCallback(() => {
//     setPairImpair(afficherresultat % 2);
//   }, []);

//   const PairImpairresultat = afficherresultat % 2 === 0 ? (
//     <span>Le nombre est pair !</span>
//   ) : (
//     <span>Le nombre est impair.</span>
//   );

//   return (
//     <div>
//       <h2>Home</h2>
//       <div className="navbar-text">{afficherresultat}</div>
//       <button onClick={incrementer}>+</button>
//       <button onClick={decrementer}>-</button>
//       <div className="text-center">{PairImpairresultat}</div>
//     </div>
//   );
// }

// export default OtherCounter;

// code du formateur ci-dessous

import React, { useCallback, useEffect, useState } from 'react';

function OtherCounter(props) {
 const [counter, setCounter] = useState(0);
    return (
      <div>
        <h2>Other Counter{counter}</h2>
        <div className="navbar-text">{counter % 2 ? 'nombre impair':'nombre pair'}</div>
        <button onClick={() => setCounter (counter + 1)}>+</button>
        <button onClick={() => setCounter (counter - 1)}>-</button>
      </div>
    );
  }
  
  export default OtherCounter;