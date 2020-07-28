import React, { Component } from 'react';
import NavTop from '../components/NavTop';
import GigList from "../components/GigList"
import { Container, Row, Col } from 'reactstrap';
import GigSetList from '../components/GigSetList';
import InputSubmit from '../components/InputSubmit'

const CrudPage = () => {
    return (
      <div>
        <NavTop />
        <Container>
          <Row>
            <Col sm="4">
              <GigList />
              <div className="btn-title">Add Gig:</div>
              <InputSubmit />
            </Col >
            <Col sm="4">
              <GigSetList />
            </Col>
            <Col sm="4">

            </Col>
          </Row>
          <Row>
            <Col sm="4">
            </Col >
            <Col sm="4">
            </Col>
            <Col sm="4">
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

export default CrudPage;