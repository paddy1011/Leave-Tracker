import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import Home from './Home';

function ProtectedRoute({isAuth:isAuth,...Rest}){
    return(
        <Route 
            render={()=>{
                if(isAuth!=null){
                    return <Home setEmpid={Rest.setEmpid} emp_name={Rest.emp_name} emp_id={isAuth}/>;
                }
                else{
                    return <Redirect to='/'/>;
                }
            }}
        />

    );
}

export default ProtectedRoute;