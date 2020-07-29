import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Container, Jumbotron, FormGroup, Label, Input, Button, Form } from 'reactstrap';
import LoginForm from "../components/LoginForm";
import Auth0LoginButton from '../components/Auth0Provider/Auth0LoginButton'


class LoginPage extends Component {
  render() {
    return (
      <div>
        <Container className="mx-auto">
          <Jumbotron>
            <h1 className="display-3">Welcome to SetFlow!</h1>
            <p className="lead">Create Gigs and SetList(s) for Your Next Jamming Session</p>
            <hr className="my-4" />
            <Form>
              <LoginForm />
            </Form>
            <Container>
              <div className="d-flex flex-column">
                <p className="d-flex justify-content-center">
                  <Auth0LoginButton class="center" color="secondary">Auth0 Login</Auth0LoginButton>
                </p>
                <Router>
                  <div className="d-flex justify-content-center">
                    <p>Click here to <Link to="./RegisterPage.js">Register</Link></p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p>Forgot password? Click <Link to="./MainPage.js">Here</Link></p>
                  </div>
                </Router>
              </div>
            </Container>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default LoginPage;
