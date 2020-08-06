import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import NavTop from '../components/NavTop';
import GigList from "../components/GigList"
import GigSetList from '../components/GigSetList';
import GigInputSubmit from '../components/GigInputSubmit'
import SetlistInputSubmit from '../components/SetlistInputSubmit'
import AddSong from '../components/AddSong';
import AllSetList from '../components/AllSetList';
import Songs from '../components/Songs';
import Loading from "../components/Loading/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Auth0Profile from '../components/Auth0Provider/Auth0Profile';
import API from '../utils/API';


class CrudPage extends Component {
  state = {
    gigs: [],
    setlists: [],
    songs: []
  }

  componentDidMount() {
    API.getGigs()
      .then(res => {this.setState({ gigs: res.data })
      console.log(this.state)
    })
  
      .catch(err => console.log(err));
    API.getSetlists()
      .then(res => {this.setState({ setlists: res.data })
      console.log(this.state)
    })
      .catch(err => console.log(err))
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleGigSubmit = event => {
    event.preventDefault();
    API.create({
      gigs: this.state.gigs
    })
      .then(res => this.loadGigs())
      .catch(err => console.log(err));
  }

  handleSetlistSubmit = event => {
    event.preventDefault();
    API.create({
      setlists: this.state.setlists
    })
      .then(res => this.loadSetlists())
      .catch(err => console.log(err));
  }

  loadSetlists = () => {
    API.getSetlistsByUser()
      .then(res =>
        this.setState({ setlists: res.data })
      )
      .catch(err => console.log(err));
  }

  loadGigs = () => {
    API.getGigsByUser()
      .then(res =>
        this.setState({ gigs: res.data })
      )
      .catch(err => console.log(err));
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
              <Card body>
                <GigList data={this.state} />
                <div className="btn-title">Add Gig:</div>
                <GigInputSubmit gigSubmit={this.handleGigSubmit} gigValue={this.state.gigs.name} onChange={this.handleInput} />
              </Card>
            </Col >
            <Col sm="4">
              <Card body>
                {/* <GigSetList /> */}
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                {/* <SavedSets /> */}
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <AllSetList data={this.state} />
              <SetlistInputSubmit setSubmit={this.handleSetlistSubmit} setlistValue={this.state.setlists.name} onChange={this.handleInput} />
            </Col >
            <Col sm="4">
              {/* <Songs /> */}
            </Col>
            <Col sm="4">
              {/* <AddSong /> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withAuthenticationRequired(CrudPage, {
  onRedirecting: () => <Loading />,
});