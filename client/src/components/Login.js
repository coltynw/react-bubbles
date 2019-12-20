import React, { useState } from 'react';
import { axiosWithAuth } from '../components/axiosWithAuth';

const Login = props => {
  const [form, setForm] = useState({
    formname: '',
    password: ''
  });

  const handleChange = e => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('login', form)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubblePage');
      })
      .catch(error => 
        console.log('Login error', error));
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div className='Login'>
      <form onSubmit={handleSubmit}>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    <h3>Username</h3>
    <p>Lambda School</p>
      <input
        type='text'
        name='username'
        placeholder='user'
        value={form.formname}
        onChange={handleChange}
      />
      <h3>Password</h3>
      <p>{'i<3Lambd4'}</p>
      <input
        type='password'
        name='password'
        placeholder='pass'
        value={form.password}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  </div>
  );
};

export default Login;
