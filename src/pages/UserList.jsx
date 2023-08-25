import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import UserProfile from '../components/UserProfile';
import PropTypes from 'prop-types';


// le bootstrap m'annule ma fonction de création

function UserList(props) {

    const initialUsers = ['Marie', 'Iskar', 'Osée', 'Hatemadah'];
    const [users, setUsers] = useState(initialUsers);
    const [criteria, setCriteria] = useState('');
    const handleSearch = useCallback((event) => {
        setCriteria(event.target.value);
    }, [])

    useEffect(() => {
        setFilteredUsers(users.filter(user => user.toLowerCase().includes(criteria.toLowerCase())))
    }, [criteria])

    const [newUser, setNewUser] = useState('');

    const handleCreateUser = useCallback((event) => {
        event.preventDefault();
        if (newUser.trim() !== '') {
            setUsers([...users, newUser]);
            setNewUser(''); // Réinitialise le champ de saisie après l'ajout
        }
    });

    const [filteredUsers, setFilteredUsers] = useState([]);


    return (
        <div>
            <h1>Liste des utilisateurs</h1>
            <form className="col-lg-3 col" onSubmit={handleCreateUser}>
                <div className="col-auto">
                    <input type="text" className='form-control  mb-3'
                        onChange={handleSearch}
                        placeholder='Recherche' />
                    <input type="text" className="form-control mb-3" value={newUser}
                        onChange={(event) => setNewUser(event.target.value)}
                        placeholder="Nouvel utilisateur" />
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3" >Créer</button>
                    </div>
                </div>

            </form>
            <div className="container">
                <div className="row mt-3">

                    {filteredUsers.map((user, i) => (
                        <div key={i} className="col-lg-3 col-md-4 col-xs-6 mb-3">
                            <UserProfile user={user} />
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList;

