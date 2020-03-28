import React, { useState } from 'react';
// import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import {AuthContext} from './components/Hooks/Auth';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute  from "./components/ProtectedRoute/ProtectedRoute";
import Registration from "./containers/Registration/Registration";
import styles from './App.module.css';
import VerifyEmail from './containers/VerifyEmail/VerifyEmail';


function App() {
  
  const [authToken,setAuthToken]=useState(false);
  return (
    <AuthContext.Provider value={{authToken,setAuthToken}}>
        <Navbar/>
        <div className={styles.content}>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/register">
              <Registration />
            </Route>
            <ProtectedRoute exact path="/verifyemail">
              <VerifyEmail />
            </ProtectedRoute>
            <ProtectedRoute exact path="/home">
              <Home />  
            </ProtectedRoute>
          </Switch>
        </div>
    </AuthContext.Provider>
  );
}

export default App;
