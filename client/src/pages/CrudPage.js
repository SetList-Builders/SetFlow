import React from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import NavTop from '../components/NavTop';
import GigList from "../components/GigList"
import GigSetList from '../components/GigSetList';
import InputSubmit from '../components/InputSubmit'
import AddSong from '../components/AddSong';
import SavedSets from '../components/SavedSets';
import AllSetList from '../components/AllSetList';
import Songs from '../components/Songs';
import Loading from "../components/Loading/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Auth0Profile from '../components/Auth0Provider/Auth0Profile';

const CrudPage = () => {
  const { user } = useAuth0();

  return (
    <div>
      <NavTop />
      
      <Auth0Profile></Auth0Profile>
                
      <Container>
        <Row>
          <Col sm="4">
            <Card body>
              <GigList />
              <div className="btn-title">Add Gig:</div>
              <InputSubmit />
            </Card>
          </Col >
          <Col sm="4">
            <Card body>
              <GigSetList />
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <SavedSets />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <AllSetList />
          </Col >
          <Col sm="4">
            <Songs />
          </Col>
          <Col sm="4">
            <AddSong />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withAuthenticationRequired(CrudPage, {
  onRedirecting: () => <Loading />,
});