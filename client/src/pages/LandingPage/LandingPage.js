
import React, { Component } from 'react';
import LoginForm from "../../components/LoginForm";
import Auth0LoginButton from '../../components/Auth0Provider/Auth0LoginButton';
import Auth0LogoutButton from '../../components/Auth0Provider/Auth0LogoutButton';
import Auth0Profile from '../../components/Auth0Provider/Auth0Profile';
import { Container, Jumbotron } from 'reactstrap';
import "./Landing.css"
import Logo from "./images/logo.png"



const LandingPage = () => {

  return (
    <div>
      <Container className="jumbo">
        <Jumbotron style={{ marginTop: "30px", padding: "0px", backgroundColor: "transparent"}}>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <img src={Logo} alt="SetFlow Logo" width="281px"/>
              {/* <h1 style={{ color: "#f8d78a", fontWeight: "700", fontSize: "65px" }}>SetFlow</h1> */}
            </div>
            <p className="d-flex justify-content-center section">THE ULTIMATE SETLIST ORGINIZATION TOOL FOR MUSICIANS</p>
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
