import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Container, Jumbotron, FormGroup, Label, Input, Button } from 'reactstrap';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Container className="mx-auto">
          <Jumbotron>
            <h1 className="display-3">Welcome to SetFlow!</h1>
            <p className="lead">Create Gigs and SetList(s) for Your Next Jamming Session</p>
            <hr className="my-4" />
            <FormGroup>
              <Label for="exampleEmail">Email:</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="SetFlow@gmail.com" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password:</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="must have at least 6 characters" />
            </FormGroup>
            <Container>
              <div className="d-flex flex-column">
                <p className="d-flex justify-content-center">
                  <Button class="center" color="secondary">Login</Button>
                </p>
                <Router>
                  <div className="d-flex justify-content-center">
                    <p>Click here to <Link to="./MainPage.js">Register</Link></p>
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
