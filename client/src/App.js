import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from './components/Loading/Loading'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage2';
import CrudPage from './pages/CrudPage';
import LaunchedPage from './pages/LaunchedPage';
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

const App = () => {
  /*const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  } */
  return (
    <Router history={history}>
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