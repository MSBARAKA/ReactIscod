import Counter from "./pages/Counter";
import Header from "./components/Header";
import SimLogin from "./pages/SimLogin";
import OtherCounter from "./pages/OtherCounter";
import UserList from "./pages/UserList";
import Storie from "./pages/Storie";
import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateUser from "./pages/CreateUser";



function App() {
  const [user, setUser] = useState('');
 
  return (
    <div>
      <Header user={user}/>
      <div  className='p-3'>
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/othercounter" element={<OtherCounter />}></Route>
        <Route path="/storie" element={<Storie/>}></Route>
        <Route path="/simlogin" element={<SimLogin/>}></Route>
        <Route path="/createuser" element={<CreateUser/>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;


