import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(async () => {
    try {
      const result = await axios.get('http://172.24.42.106:8080/users/', {
        headers: {
          Authorization: 'bearer ' + localStorage.getItem('token'),
        },
      });
      setUsers(result.data);
    } catch (err) {
      history.push('/');
    }
  }, []);
  return (
    <div>
      <h1>USERS LIST</h1>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}

export default Users;
