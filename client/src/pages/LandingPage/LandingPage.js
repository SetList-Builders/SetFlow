
import React, { Component } from 'react';
import LoginForm from "../../components/LoginForm";
import Auth0LoginButton from '../../components/Auth0Provider/Auth0LoginButton';
import Auth0LogoutButton from '../../components/Auth0Provider/Auth0LogoutButton';
import Auth0Profile from '../../components/Auth0Provider/Auth0Profile';
import { Container, Jumbotron } from 'reactstrap';
import "./Landing.css"



const LandingPage = () => {

  return (
    <div>
      <Container className="mx-auto">
        <Jumbotron style={{ marginTop: "70px", backgroundColor: "transparent", fontFamily: "Didot, serif", color: "#cea935" }}>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <h1 style={{ color: "#cea935", fontWeight: "700", fontSize: "65px" }}>SetFlow</h1>
            </div>
            <p className="lead d-flex justify-content-center">THE ULTIMATE SETLIST ORGINIZATION TOOL FOR MUSICIANS</p>
          </div>
          <Container>
            <div className="d-flex flex-column">
              <p className="d-flex justify-content-center">
                <Auth0LoginButton>Auth0 Login</Auth0LoginButton>
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
