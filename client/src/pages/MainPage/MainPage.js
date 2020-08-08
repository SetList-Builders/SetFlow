import React, { Component } from 'react';
import NavTop from '../../components/NavTop';
import GigList from '../../components/GigList';
import GigSetList from '../../components/GigSetList'
import AllSetList from '../../components/AllSetList';
import Songs from '../../components/Songs';
import { Row, Col, Container, Card } from 'reactstrap';
import API from '../../utils/API';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Auth0Profile from '../../components/Auth0Provider/Auth0Profile'
import Loading from "../../components/Loading/Loading";
import Instructions from "../../components/Instructions"


class MainPage extends Component {
  state = {
    gigs: [],
    setlists: [],
    songs: []
  }

  componentDidMount() {

    //const { user } = useAuth0();
    API.findOrCreateUserbyemail(this.props.email)
      .then(res => {
        this.setState({ gigs: res.data.gigs, setlists: res.data.setlists })
      })
  }

  render() {
    return (
      <div style={{
        backgroundColor: "black",
        position: "fixed",
        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px",
        zIndex: "900"
      }}>
        <Auth0Profile ></Auth0Profile>
        <NavTop />
        <Container>
          <Row>
            <Col sm="4">
              <Card body style={{ backgroundColor: "#080939", border: "solid 3px #cea935", color: "#cea935", margin: "20px" }}>
                <GigList data={this.state} />
              </Card>
            </Col>
            <Col sm="4">
              <Card body style={{ backgroundColor: "#080939", border: "solid 3px #cea935", color: "#cea935", margin: "20px" }}>
                <GigSetList data={this.state} />
              </Card>
            </Col>
            <Col sm="4">
              <Card body style={{ backgroundColor: "#080939", border: "solid 3px #cea935", color: "#cea935", margin: "20px" }}>
              <Songs data={this.state}/>
              </Card>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col sm="4">
              <Card body style={{ backgroundColor: "#080939", border: "solid 3px #cea935", color: "#cea935", margin: "20px" }}>
                <AllSetList data={this.state} />
              </Card>
            </Col>
            <Col>
              <Card body style={{ backgroundColor: "#080939", border: "solid 3px #cea935", color: "#cea935", margin: "20px" }}>
                <Songs data={this.state} />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withAuthenticationRequired(MainPage, {
  onRedirecting: () => <Loading />,
});