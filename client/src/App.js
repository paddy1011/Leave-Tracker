import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/JS/Login/login';
import ProtectedRoute from './components/ProtectedRoute';
import NotFoundPage from './components/JS/NotFoundPage';

function App() {
  const [emp_id, setEmpid]=useState(localStorage.getItem('emp_id'));
  const [emp_name, setEmpname]=useState(localStorage.getItem('emp_name'));
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact render={()=>{
            if(emp_id==null)
              return<Login setEmpid={setEmpid} setEmpname={setEmpname}/>;
            else{
              return <Redirect to='/home' />;}
            }}>
          </Route>
          <Route path='/404' exact component={NotFoundPage} />
          <ProtectedRoute path='/home' isAuth={emp_id} setEmpid={setEmpid} emp_name={emp_name} />
          <Redirect to='/404' />
        </Switch>
      </Router> 
    </>
  );
}

export default App;