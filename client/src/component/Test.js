import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      name,
      email,
      password
    };

    try {
      const response = await axios.post('http://localhost:4000/users', user);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      <label>Email:</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

      <button type="submit">Add User</button>
    </form>
  );
};

export default Test;
