import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const handlePost = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post('http://172.24.42.106:8080/users/login', { email, password });
      localStorage.setItem('token', result.headers.accesstoken);
      history.push('/users');
    } catch (err) {
      history.push('/');
    }
  };

  return (
    <div className=" Login h-64 bg-gray-300 p-10 flex flex-col">
      <h1>LOGIN</h1>
      <form className="flex flex-col justify-evenly h-full" onSubmit={(e) => handlePost(e)}>
        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">LOG IN</button>
      </form>
    </div>
  );
}

export default Login;
