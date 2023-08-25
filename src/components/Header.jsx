import logo from '../logo.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props) {

    // useEffect(() => {
    //     setTimeout(setUser('Stéphane'), 1000);
    // }, [])

    // const setUserEva = useCallback(() => {
    //     if (user === 'Stéphane') {
    //         setUser('Eva');
    //     }
    // }, [user]
    // )

    // const setUserAude = useCallback(() => {
    //     if (user === 'Stéphane') {
    //         setUser('Aude');
    //     }
    // }, [user]
    // )



    const login = props.user ? <span>Bienvenue {props.user} !</span> : <span>Connectez-vous !</span>


    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                <div className="container-fluid">
                    <div className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top mb-1" />
                        MOOC React
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/counter" className="nav-link" href="#">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/simlogin" className="nav-link" href="#">Login</Link>
                        </li>
                    </ul>
                    {/* <div className="navbar-text">Bonjour {user}!</div> */}

                    {/* chapitre affichage conditionnel ci-dessous */}
                    {/* <div className="navbar-text">
                        {user ? <span>Bienvenue {user} !</span> : <span>Connectez-vous !</span>}
                    </div>  */}
                    {/* on peut écrire le code ci-dessus en déplaçant le code dans une fonction plus haut dans le code et en l'appelant ici */}
                    <div className="navbar-text">
                        {login}
                    </div>
                </div>
            </nav>
            {/* <button onClick={setUserEva} >Eva</button>
            <button onClick={setUserAude} >Aude</button> 
            fonctions et setUser sont simples
            */}

        </div>
    );
}

Header.propTypes = {
    user: PropTypes.string
}

export default Header;

