import React from 'react';
import propTypes from 'prop-types';

function UserProfile(props) {
    return (
        <div className="card">
            <img src="https://media.istockphoto.com/id/1454261765/fr/photo/abstraction-a%C3%A9rienne-dun-magnifique-littoral.jpg?s=612x612&w=0&k=20&c=JhTM3Cig2BYVHeVKsj0jzp2dEVd2kLzSKW_Q_f8phc8=" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.user}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        </div>
    );
}


UserProfile.propTypes = {

user: propTypes.string.isRequired

};


export default UserProfile;