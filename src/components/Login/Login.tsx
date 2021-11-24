import React, { FormEvent, FormEventHandler, useState } from 'react';
import { API_BASE_URL } from '../../config';
import './Login.css';

interface Props  {
    setToken: (token: string) => void;
}

interface ICredentials {
  username: string|undefined;
  password: string|undefined;
}

async function loginUser(credentials : ICredentials) {
  return fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function Login({setToken}: Props) : JSX.Element {
  const [username, setUserName] = useState<string|undefined>();
  const [password, setPassword] = useState<string|undefined>();

 async function handleSubmit(e : FormEvent<HTMLFormElement>) : Promise<void> {
    e.preventDefault();
    const {access_token : token} = await loginUser({
      username,
      password
    });

    setToken(token);
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login;