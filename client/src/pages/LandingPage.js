
import React, { Component } from 'react';
import LoginForm from "../components/LoginForm";
import Auth0LoginButton from '../components/Auth0Provider/Auth0LoginButton';
import Auth0LogoutButton from '../components/Auth0Provider/Auth0LogoutButton';
import Auth0Profile from '../components/Auth0Provider/Auth0Profile';
import { Container, Jumbotron } from 'reactstrap';
import "./Landing.css"



const LandingPage = () => {
  
    return (
      <div>
        <Container className="mx-auto">
          <Jumbotron>
            <h1 className="display-3">Welcome to SetFlow!</h1>
            <p className="lead">Create Gigs and SetList(s) for Your Next Jamming Session</p>
            <hr className="my-4" />
            <Container>
              <div className="d-flex flex-column">
                <p className="d-flex justify-content-center">
                  <Auth0LoginButton class="center" color="secondary">Auth0 Login</Auth0LoginButton>
                </p>
                <p className="d-flex justify-content-center">
                  <Auth0LogoutButton class="center" color="secondary">Auth0 Login</Auth0LogoutButton>
                </p>
              </div>
            </Container>
          </Jumbotron>
        </Container>
      </div>

    );

}

export default LandingPage;
