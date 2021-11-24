import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import './App.css';
import CallDetail from './components/CallDetail';
import Dashboard from './components/Dashboard';

const App : React.FC = () => (
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

export default App;
