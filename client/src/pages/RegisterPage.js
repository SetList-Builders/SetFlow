import React from 'react';
import { NavLink } from 'react-router-dom'
import { Container, Jumbotron, FormGroup, Label, Input, Button, Form } from 'reactstrap';
import LoginForm from "../components/LoginForm"
import Loading from "../components/Loading/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Auth0Profile from '../components/Auth0Provider/Auth0Profile';

const RegisterPage = () => {
  const { user } = useAuth0();

  const loginLink = <NavLink to='/'>Login</NavLink>

  return (
    <div>
      <Auth0Profile ></Auth0Profile>
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
              <div className="d-flex justify-content-center">
                <p>Already have an Account? {loginLink}</p>
              </div>
          </Form>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default withAuthenticationRequired(RegisterPage, {
  onRedirecting: () => <Loading />,
});