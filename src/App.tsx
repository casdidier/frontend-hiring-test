import React, {useState} from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import './App.css';
import CallDetail from './components/CallDetail';
import Dashboard from './components/Dashboard';
import Login from './components/Login/Login';
import useToken from './hooks/useToken';


function App() : JSX.Element {
  const { token, setToken } = useToken();

 if(!token) {
  return <Login setToken={setToken} />
 }

 return (
    <div className="wrapper">
      <h1>Aircall</h1>
       <Router>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/call/:id" component={CallDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
