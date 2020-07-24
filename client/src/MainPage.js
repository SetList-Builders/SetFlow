import React, { Component } from 'react';
import Nav from './components/Nav';
import { Row, Col } from 'reactstrap';
import GigList from './components/GigList';
import SetList from './components/SetList';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Row>
          <Col sm="6">
            <GigList />
          </Col>
          <Col sm="6">
            <SetList />
          </Col>
        </Row>
      </div>
    );
  }
}

export default MainPage;
