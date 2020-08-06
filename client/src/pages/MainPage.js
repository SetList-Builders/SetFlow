import React, { Component } from 'react';
import NavTop from '../components/NavTop';
import GigList from '../components/GigList';
import GigSetList from '../components/GigSetList'
import AllSetList from '../components/AllSetList';
import Songs from '../components/Songs';
import { Row, Col, Container, Card } from 'reactstrap';
import API from '../utils/API';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Auth0Profile from '../components/Auth0Provider/Auth0Profile';
import Loading from "../components/Loading/Loading";
import Instructions from "../components/Instructions"

class MainPage extends Component {
  state = {
    gigs: [],
    setlists: [],
    songs: []
  }

  componentDidMount() {

    //const { user } = useAuth0();
    API.findOrCreateUserbyemail(this.props.email)
      .then(res => {this.setState({ gigs: res.data.gigs,  setlists: res.data.setlists})
    })
    // API.getGigs()
    //   .then(res => {this.setState({ gigs: res.data })
    //   console.log(this.state)
    // })
    //   .catch(err => console.log(err));
    // API.getSetlists()
    //   .then(res => {this.setState({ setlists: res.data })
    //   console.log(this.state)
    // })
    //   .catch(err => console.log(err))
  
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
        zIndex: "1000"
      }}>
        <NavTop />
        <Auth0Profile></Auth0Profile>
        <Container>
          <Row>
            <Col sm="4">
              <Card body style={{ backgroundColor: "#cea935", border: "solid 3px #9d9d9d", color: "#080939", margin: "20px" }}>
                <GigList data={this.state} />
                <Instructions />
              </Card>
            </Col>
            <Col sm="4">
              <Card body style={{ backgroundColor: "black", borderTop: "solid 4px #cea935", borderBottom: "solid 4px #cea935", borderLeft: "solid 3px #080939", borderRight: "solid 3px #080939", color: "#cea935", margin: "20px" }}>
                <GigSetList data={this.state} />
              </Card>
            </Col>
            <Col sm="4">
              <Card body style={{ backgroundColor: "black", borderTop: "solid 4px #080939", borderBottom: "solid 4px #080939", borderLeft: "solid 3px #cea935", borderRight: "solid 3px #cea935", color: "#cea935", margin: "20px" }}>

              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <Card body style={{ backgroundColor: "#080939", border: "solid 3px #9d9d9d", color: "#cea935", margin: "20px" }}>
                <AllSetList data={this.state} />
                <Instructions />
              </Card>

            </Col>
            <Col>
              <Card body style={{ backgroundColor: "black", borderTop: "solid 4px #080939", borderBottom: "solid 4px #080939", borderLeft: "solid 3px #cea935", borderRight: "solid 3px #cea935", color: "#cea935", margin: "20px" }}>
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