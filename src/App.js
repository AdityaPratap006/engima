import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Login from './pages/login/login';
import DashboardStaff from './pages/staffDashboard/staffDashboard';
import StaffComplaintDetails from './components/staffComplaintDetails/staffComplaintDetails';
import OfficerDashboard from './pages/officerDashboard/officerDashboard';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Switch>
         <Route exact path='/'>
            <Login/>
         </Route>
         <Route exact path='/staff/dashboard'>
            <DashboardStaff/>
         </Route>
         <Route exact path='/staff/complaint/:id'>
            <StaffComplaintDetails/>
         </Route>
         <Route exact path='/officer/dashboard'>
            <OfficerDashboard/>
         </Route>
       </Switch>

    </div>
  );
}

export default App;
