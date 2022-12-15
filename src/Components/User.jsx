import React from 'react';
import './User.css'

const User = ({id, name, email, username}) => {
    return (
        <div className='user__box'>
            <h1 className='user__name'>Name: <br/> {name}</h1>
            <h3 className='user__email'>Email:<br/> {email}</h3>
            <h3 className='user__username'>Username:<br/> {username}</h3>
        </div>
    );
}

export default User;
