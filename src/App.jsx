import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import UserPosts from './Components/UserPosts';
import Nav from './Components/Nav';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users/:username" element={<UserPosts/>}/>
      </Routes>
    </>
  );
}

export default App;
