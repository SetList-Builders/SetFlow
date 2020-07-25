import React, { Component } from 'react';
import NavTop from '../components/NavTop';
import { Row, Col, Container } from 'reactstrap';
import GigList from '../components/GigList';
import SetList from '../components/SetList';

class MainPage extends Component {
  render() {
    return (
      <div>
        <NavTop />
        <Container>
          <Row>
            <Col sm="6">
              <GigList />
            </Col>
            <Col sm="6">
              <SetList />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainPage;
