import React, { useState } from 'react';

import axios from 'axios';

import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePost = async (e) => {
    e.preventDefault();
    const result = await axios.post('http://172.24.42.106:8080/users', { name, email, password });
    console.log(result);
  };
  return (
    <div className="Login h-64 bg-gray-300 p-10 flex flex-col">
      <h1>REGISTER</h1>
      <form className="flex flex-col justify-evenly h-full" onSubmit={(e) => handlePost(e)}>
        <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default Register;
