import React, { useState, useEffect } from 'react';
// import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import {AuthContext} from './components/Hooks/Auth';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute  from "./components/ProtectedRoute/ProtectedRoute";
import Registration from "./containers/Registration/Registration";
import Profile from "./containers/Profile/Profile";
import styles from './App.module.css';
import Loader from './components/Loader/Loader';

function App() {
  
  const [authToken,setAuthToken]=useState(false);
  const [currentUser,setCurrentUser] = useState();
  const history=useHistory();

  const logout=()=>{
    setAuthToken(null);
    localStorage.removeItem('token');
    console.log('logout');
    setCurrentUser(null);
    history.replace('/');
  }
  useEffect(()=>{
    const token =  window.localStorage.getItem('token');
    if(token){
      setAuthToken(token);
      console.log(token,'app.js')
    }
  },[]);
  useEffect(()=>{
    if(authToken){ 
      fetch('http://localhost:4000/api/userdetails',{
        method:'GET',
        headers:{'Content-Type' : "application/json", "Authorization" : `Bearer ${authToken}`},
      })
      .then(response=>response.json())
      .then((user) =>{
        setCurrentUser(user);
      })
    }
  },[authToken]);
  return (
    <AuthContext.Provider value={{authToken,setAuthToken, currentUser}}>
        <Navbar logout={logout} />
        <div className={styles.content}>
          <Switch>
            <Route exact path="/loader"> <Loader/> </Route>
            <Route exact path="/">
              {authToken ? <Home/> :<Login />}
            </Route>
            <Route exact path="/register">
              {authToken ? <Redirect to="/" /> :<Registration /> }
            </Route>
       
            <ProtectedRoute path="/profile/:profileId"> <Profile /> </ProtectedRoute> 
      
          </Switch>
        </div>
    </AuthContext.Provider>
  );
}

export default App;
