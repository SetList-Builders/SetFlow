import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import CrudPage from './pages/CrudPage';
import LaunchedPage from './pages/LaunchedPage';

const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={LoginPage}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/main" component={MainPage}/>
      <Route path="/edit" component={CrudPage}/>
      <Route path="/launched" component={LaunchedPage}/>
      </Switch>
    </Router>
  );
};

export default App;