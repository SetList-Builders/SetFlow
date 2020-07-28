import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Container, Jumbotron, FormGroup, Label, Input, Button, Form } from 'reactstrap';
import LoginForm from "../components/LoginForm"

const RegisterPage = () => {
    return (
      <div>
        <Container className="mx-auto">
          <Jumbotron>
            <h1 className="display-3">Welcome to SetFlow!</h1>
            <hr className="my-4" />
            <h5>Create an Account:</h5>
            <Form>
              <LoginForm />
              <FormGroup>
                <Label for="examplePassword">Confirm Password:</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="must match above" />
              </FormGroup>
              <div className="d-flex flex-column">
                <p className="d-flex justify-content-center">
                  <Button class="center" color="secondary">Register</Button>
                </p>
              </div>
              <Router>
                <div className="d-flex justify-content-center">
                  <p>Already have an Account? <Link to="./MainPage.js">Login</Link></p>
                </div>
              </Router>
            </Form>
          </Jumbotron>
        </Container>
      </div>
    );
  }

export default RegisterPage;