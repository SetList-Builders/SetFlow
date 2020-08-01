import React from 'react';
import NavTop from '../components/NavTop';
import GigList from '../components/GigList';
import GigSetList from '../components/GigSetList'
import AllSetList from '../components/AllSetList';
import Songs from '../components/Songs';
import Loading from "../components/Loading/Loading";
import Auth0Profile from '../components/Auth0Provider/Auth0Profile';
import { Row, Col, Container, Card } from 'reactstrap';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const MainPage = () => {
  const { user } = useAuth0();
  return (
    <div>
      <NavTop />
      <Auth0Profile ></Auth0Profile>
      <Container>
        <Row>
          <Col sm="4">
            <Card body>
              <GigList />
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <GigSetList />
            </Card>
          </Col>
          <Col sm="4">
            <Songs />
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <AllSetList />
          </Col>
          <Col>
            <Songs />
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default withAuthenticationRequired(MainPage, {
  onRedirecting: () => <Loading />,
});
