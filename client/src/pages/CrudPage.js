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

const CrudPage = () => {
  return (
    <div>
      <NavTop />
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

export default CrudPage;