import React from "react";
import {useAuth} from '../Hooks/Auth'
import { Route, Redirect, useLocation } from 'react-router-dom';

const ProtectedRoute =({children,...rest})=>{
    const {authToken} = useAuth();
    const location = useLocation();

    return (
     
      <Route {...rest}>
        {authToken ? (
          children
        ) : (
          <Redirect to={{ pathname: '/', state: { referer: location.pathname } }} />
        )}
      </Route>
    );
  };

  export default ProtectedRoute;