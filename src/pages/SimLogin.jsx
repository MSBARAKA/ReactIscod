import React from 'react';
import propTypes  from 'prop-types';

function SimLogin({setUser}) {
    return (
        <div>
            <button onClick={() =>setUser('Eva')} className='btn btn-primary me-1' >Eva</button>
            <button onClick={() =>setUser('Aude')} className='btn btn-primary'>Aude</button>
        </div>
    );
}

export default SimLogin;

SimLogin.propTypes = {
    setUser: propTypes.func.isRequired
}

// le type de propTypes  est  une fonction cad func. Le isRequired permet de pas omettre cette prop


// const setUserEva = useCallback(() => {
//     setUser('Eva');
// }, []
// )

// const setUserAude = useCallback(() => {
//     setUser('Aude');
// }, []
// )