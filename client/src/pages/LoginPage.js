import React from 'react';
import { NavLink } from 'react-router-dom'
import { Container, Jumbotron, Button } from 'reactstrap';
import LoginForm from "../components/LoginForm"

const LoginPage = () => {

  const registerLink = <NavLink to='/register'>Register</NavLink>

    return (
      <div>
        <Container className="mx-auto">
          <Jumbotron>
            <h1 className="display-3">Welcome to SetFlow!</h1>
            <p className="lead">Create Gigs and SetList(s) for Your Next Jamming Session</p>
            <hr className="my-4" />
            <LoginForm />
            <Container>
              <div className="d-flex flex-column">
                <p className="d-flex justify-content-center">
                  <Button class="center" color="secondary">Login</Button>
                </p>
                  <div className="d-flex justify-content-center">
                      <p>Click here to {registerLink}</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p>Forgot password? Click <a>Here</a></p>
                  </div>
              </div>
            </Container>
          </Jumbotron>
        </Container>
      </div>

    );
  }

export default LoginPage;
