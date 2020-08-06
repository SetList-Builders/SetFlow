import React, { Component } from 'react';
import NavTop from '../components/NavTop';
import GigList from '../components/GigList';
import GigSetList from '../components/GigSetList'
import AllSetList from '../components/AllSetList';
import Songs from '../components/Songs';
import { Row, Col, Container, Card } from 'reactstrap';
import API from '../utils/API';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading/Loading";
import Instructions from "../components/Instructions"

class MainPage extends Component {
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

  render() {
    return (
      <div>
        <NavTop />
        <Container>
          <Row>
            <Col sm="4">
              <Card body>
                <GigList data={this.state} />
                <Instructions />
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <GigSetList data={this.state} />
              </Card>
            </Col>
            <Col sm="4">
              <Card body>

              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <Card body>
                <AllSetList data={this.state} />
                <Instructions />
              </Card>

            </Col>
            <Col>
              <Songs data={this.state} />
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