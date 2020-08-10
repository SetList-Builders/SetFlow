import React, { Component } from 'react';
import NavTop from '../../components/NavTop';
import GigList from '../../components/GigList';
import GigSetList from '../../components/GigSetList'
import AllSetList from '../../components/AllSetList';
import Songs from '../../components/Songs';
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
    currentSetlist: null,
    setlists: [],
    songs: []
  }

  handleGigClick = (gigId) => {
    API.getSetlistsByGig(gigId)
      .then(res => {this.setState({ currentGig: res.data })
    })
    .catch(err => console.log(err))
  }

  handleSetlistClick = (setlistId) => {
    API.getLyricsBySetlist(setlistId)
    //   .then(res => {this.setState({ currentSetlist: res.data })
    // })
      .then(res => console.log("Data from song", res))
    .catch(err => console.log(err))
  }

  componentDidMount() {

    //const { user } = useAuth0();
    API.findOrCreateUserbyemail(this.props.email)
      .then(res => {this.setState({ gigs: res.data.gigs, setlists: res.data.setlists })
    })
    .catch(err => console.log(err))
    // API.getGigsByUser()
    //   .then(res => {this.setState({ gigs: res.data })
    //   console.log(this.state)
    // })
    //   .catch(err => console.log(err));
    // API.getSetlistsByUser()
    //   .then(res => {this.setState({ setlists: res.data })
    //   console.log(this.state)
    // })
    //   .catch(err => console.log(err))
  
}

  render() {
    return (
      <div className="bg">
        <NavTop />
        {/* <Auth0Profile></Auth0Profile> */}
        <Container>
          <Row>
            <Col sm="4">
              <Card className="giglist">
                <GigList className="gigcard" handleGigClick={this.handleGigClick}  gigs={this.state.gigs} setlists={this.state.setlists} currentGig={this.state.currentGig} />
                <Instructions />
              </Card>
            </Col>
            <Col sm="4">
              <Card body style={{ backgroundColor: "black", borderTop: "solid 4px #cea935", borderBottom: "solid 4px #cea935", borderLeft: "solid 3px #080939", borderRight: "solid 3px #080939", color: "#cea935", margin: "20px" }}>
                <GigSetList setlists={this.state.setlists} gigs={this.state.gigs} currentGig={this.state.currentGig} />
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
                <AllSetList currentSetlist={this.state.currentSetlist} handleSetlistClick={this.handleSetlistClick} setlists={this.state.setlists} />
                <Instructions />
              </Card>

            </Col>
            <Col>
              <Card body style={{ backgroundColor: "black", borderTop: "solid 4px #080939", borderBottom: "solid 4px #080939", borderLeft: "solid 3px #cea935", borderRight: "solid 3px #cea935", color: "#cea935", margin: "20px" }}>
                <Songs currentSetlist={this.state.currentSetlist} />
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