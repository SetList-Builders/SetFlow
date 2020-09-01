import React, { Component } from 'react';
import NavTop from '../components/NavTop';
import { Container, Row, Col, Card } from 'reactstrap';
import GigSetList from '../components/GigSetList';
import Lyrics from '../components/Lyrics'
import Loading from "../components/Loading/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Auth0Profile from '../components/Auth0Provider/Auth0Profile';
import API from '../utils/API';
import './MainPage/Main.css'

class LaunchedPage extends Component {
  state = {
    gigs: [],
    currentGig: null,
    setlists: [],
    currentSetlist: null,
    songs: []
  }

  loadCurrentGig = () => {
    API.getGig(this.props.match.params.id)
    .then(res => {
      this.setState({ currentGig: res.data })
        console.log(res.data)
      })
      .catch(err => console.log(err));
    }

  componentDidMount() {
    this.loadCurrentGig();
  }

  render() {
    return (
      <div className="bg">
        <NavTop />
        <Container>
          <Row>
            <Col sm="4">
              <Card className="gigsetlist">
                <GigSetList 
                  setlists={this.state.setlists} 
                  gigs={this.state.gigs}
                  currentGig={this.state.currentGig}
                  // handleSetlistClick={this.handleSetlistClick}
                   />
              </Card>
            </Col>

            <Col>
              <Card className="lyrics">
                <Lyrics data={this.state} />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
}

export default withAuthenticationRequired(LaunchedPage, {
  onRedirecting: () => <Loading />,
});


