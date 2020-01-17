import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Login from './pages/login/login';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Switch>
         <Route exact path='/'>
            <Login/>
         </Route>
       </Switch>

    </div>
  );
}

export default App;
