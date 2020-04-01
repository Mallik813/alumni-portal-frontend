import React, { useState, useEffect } from 'react';
// import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import {AuthContext} from './components/Hooks/Auth';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute  from "./components/ProtectedRoute/ProtectedRoute";
import Registration from "./containers/Registration/Registration";
import styles from './App.module.css';

function App() {
  
  const [authToken,setAuthToken]=useState(false);
  const [currentUser,setCurrentUser] = useState();
  const [openNav,setOpenNav]=useState(0);
  
  const logout=()=>{
    setAuthToken(null);
    localStorage.removeItem('token');
    console.log('logout');
    setCurrentUser(null);
  }

  useEffect(()=>{
    const token =  window.localStorage.getItem('token');
    if(token){
      setAuthToken(token);
    }
    if(authToken){ 
      fetch('http://localhost:4000/api/userdetails',{
        method:'GET',
        headers:{'Content-Type' : "application/json", "Authorization" : `Bearer ${authToken}`},
      })
      .then(response=>response.json())
      .then(user=>{
        setCurrentUser(user);
      })
    }
  },[authToken]);
  return (
    <AuthContext.Provider value={{authToken,setAuthToken, currentUser}}>
        <Navbar openNav={openNav} setOpenNav={setOpenNav} logout={logout} />
        <div className={styles.content}>
          <Switch>
            <Route exact path="/">
              {currentUser?<Home /> 
                          :<Login />
              }
            </Route>
            <Route exact path="/register">
              {currentUser? <Redirect to="/" />
                          :<Registration />
              }
            </Route>
          </Switch>
        </div>
    </AuthContext.Provider>
  );
}

export default App;
