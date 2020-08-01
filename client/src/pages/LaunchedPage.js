import React, { Component } from 'react';
import NavTop from '../components/NavTop';
import { Container, Row, Col } from 'reactstrap';
import GigSetList from '../components/GigSetList';
import Lyrics from '../components/Lyrics'
import Loading from "../components/Loading/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Auth0Profile from '../components/Auth0Provider/Auth0Profile';

const LaunchedPage = () => {
  const { user } = useAuth0();
    return (
      <div>
        <NavTop />
        <Auth0Profile ></Auth0Profile>
        <Container>
        <Row>
          <Col sm="4">
           <GigSetList/>
          </Col>
          <Col>
          <Lyrics/>
          </Col>
        </Row>
        </Container>
      </div>
    );
  };


  export default withAuthenticationRequired(LaunchedPage, {
    onRedirecting: () => <Loading />,
  });


