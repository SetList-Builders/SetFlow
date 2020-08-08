import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from './components/Loading/Loading'
import LandingPage from './pages/LandingPage/LandingPage.js';
import MainPage from './pages/MainPage/MainPage';
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
  const { user } = useAuth0();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/main" >
          <MainPage email={user ? user.email : null} />
        </Route>
        <Route path="/edit" >
          <CrudPage email={user ? user.email : null} />
        </Route>
        <Route path="/launched" component={LaunchedPage} />
      </Switch>
    </Router>
  );
};

export default App;