import React from 'react';
import NavTop from '../components/NavTop';
import GigList from '../components/GigList';
import GigSetList from '../components/GigSetList'
import AllSetList from '../components/AllSetList';
import Songs from '../components/Songs';
import { Row, Col, Container, Card } from 'reactstrap';

const MainPage = () => {
  return (
    <div>
      <NavTop />
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


export default MainPage;
