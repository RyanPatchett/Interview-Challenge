import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User'
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

    const [users, setUsers] = useState([])

    async function getUsers() {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(data)
        setUsers(data)
    }

    useEffect(() => {
        setTimeout(()=> {
            getUsers()
        }, 2000)
    }, [])

    function renderUsers(){
        return users.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id}>
                <User

                id={user.id}
                name={user.name}
                email={user.email}
                username={user.username}
                />
            </Link>
        ))
    }

    return (
        <div className='Users'>
            <h1 className='user__title'> Users <br/> Click on a user to see their posts.</h1>
            <div className="user__container">
                {users.length ? renderUsers() : <h1> Loading... </h1>}
            </div>
        </div>
    );
}

export default Home;
