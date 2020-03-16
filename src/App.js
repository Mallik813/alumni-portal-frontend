import React, { useState } from 'react';
import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import {AuthContext} from './components/Hooks/Auth';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute  from "./components/ProtectedRoute/ProtectedRoute";


function App() {
  
  const [authToken,setAuthToken]=useState(false);
  return (
    <AuthContext.Provider value={{authToken,setAuthToken}}>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <ProtectedRoute exact path="/home">
            <Home />  
          </ProtectedRoute>
        </Switch>
    </AuthContext.Provider>
  );
}

export default App;
