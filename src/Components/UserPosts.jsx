import { Link, useParams } from "react-router-dom";
import react, { useEffect, useState } from "react";
import axios from "axios";
import './UserPosts.css'

function Users() {
  const [userData, setUserData] = useState({});

  const { username } = useParams();

  async function getUserData() {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    console.log(data)
    setUserData(data)
  
    //{userData.length >0 ? true : false}
    
  }

  useEffect(() => {
    setTimeout(()=> {
      getUserData()
  }, 2000)
    
  }, []);

  function renderPosts(){
    return userData.filter(function(userData){ return userData.userId == username}).map((data) => (
      <div className="post__box">
        <h1 className="post__title"> {data.title} </h1>
        <p className="post__para"> {data.body}</p>
      </div>
       
    ))
}

  //"https://jsonplaceholder.typicode.com/users/id"

  return (
    <div className="posts__container">
        <Link to="/"> <h1 className="return__btn">Go Back </h1> </Link>
        <div className="posts__box">
          
          {userData.length ? renderPosts() : <h1> Loading... </h1>}
        </div>

    </div>
  );
}

export default Users;
