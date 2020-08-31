import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import NavTop from '../../components/NavTop';
import GigList from '../../components/GigList';
import GigSetList from '../../components/GigSetList'
import AllSetList from '../../components/AllSetList';
import SongsGigDash from '../../components/SongsGigDash';
import SongsSetlistDash from '../../components/SongSetlistDash';
import { Row, Col, Container, Card } from 'reactstrap';
import API from '../../utils/API';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../../components/Loading/Loading";
import Instructions from "../../components/Instructions"
import './Main.css'
import Auth0Profile from '../../components/Auth0Provider/Auth0Profile';

class MainPage extends Component {
  state = {
    gigs: [],
    currentGig: null,
    launchedGig: [],
    toLaunchPage: false,
    currentSetlist1: null,
    currentSetlist2: null,
    setlists: [],
    songs: []
  }

  handleLaunchClick = (id) => {
    API.getGig(id)
      .then(res => {
        this.setState({ launchedGig: res.data })
        console.log('data from api:', id)
        this.setRedirect()
        this.renderRedirect()
      })
      .catch(err => console.log(err))
  }

  setRedirect = () => {
    this.setState({
      toLaunchPage: true
    })
  }

  renderRedirect = () => {
    if (this.state.toLaunchPage) {
      return <Redirect to="/launched" />
    }
  }

  handleGigClick = (gigId) => {
    API.getSetlistsByGig(gigId)
      .then(res => {
        this.setState({ currentGig: res.data })
      })
      .catch(err => console.log(err))
  }

  setlistClickTop = (setlistId) => {
    API.getLyricsBySetlist(setlistId)
      .then(res => {
        this.setState({ currentSetlist1: res.data })
      })
      .catch(err => console.log(err))
  }

  allSetlistClick = (setlistId) => {
    API.getLyricsBySetlist(setlistId)
      .then(res => {
        this.setState({ currentSetlist2: res.data })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {

    API.findOrCreateUserbyemail(this.props.email)
      .then(res => {
        this.setState({ gigs: res.data.gigs, setlists: res.data.setlists })
      })
    // API.getGigs()
    //   .then(res => {
    //     this.setState({ gigs: res.data })
    //     console.log(` getting gigs: ${this.state.gigs}`)
    //   })

    //   .catch(err => console.log(err));
    // API.getSetlists()
    //   .then(res => {
    //     this.setState({ setlists: res.data })
    //     console.log(` getting setlists: ${this.state.setlists}`)
    //   })
    //   .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="bg" >
        <NavTop />
        {/* <Auth0Profile></Auth0Profile> */}
        <Container>
          <Row>
            <Col sm="4">
              <Card className="giglist">
                <GigList
                  className="gigcard"
                  handleGigClick={this.handleGigClick}
                  gigs={this.state.gigs}
                  setlists={this.state.setlists}
                  currentGig={this.state.currentGig}
                  // Launch props
                  launchedGig={this.state.launchedGig}
                  handleLaunchClick={this.handleLaunchClick}
                  setRedirect={this.setRedirect}
                  renderRedirect={this.renderRedirect}
                />
                <Instructions />
              </Card>
            </Col>
            <Col sm="4">
              <Card className="gigsetlist">
                <GigSetList
                  setlists={this.state.setlists}
                  gigs={this.state.gigs}
                  currentGig={this.state.currentGig}
                  setlistClickTop={this.setlistClickTop} />
              </Card>
            </Col>
            <Col sm="4">
              <Card className="setlistsongs">
                <SongsGigDash currentSetlist1={this.state.currentSetlist1} />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <Card className="allsetlists">
                <AllSetList
                  currentSetlist2={this.state.currentSetlist2}
                  allSetlistClick={this.allSetlistClick}
                  setlists={this.state.setlists}
                />
                <Instructions />
              </Card>

            </Col>
            <Col>
              <Card className="setlistsongs">
                <SongsSetlistDash currentSetlist2={this.state.currentSetlist2} />
              </Card>

            </Col>
          </Row>
        </Container >
      </div >
    )
  }
}

export default withAuthenticationRequired(MainPage, {
  onRedirecting: () => <Loading />,
});