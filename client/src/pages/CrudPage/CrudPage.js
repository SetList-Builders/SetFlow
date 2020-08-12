import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import NavTop from '../../components/NavTop';
import GigList from "../../components/GigList"
import GigSetList from '../../components/GigSetList';
import GigInputSubmit from '../../components/GigInputSubmit'
import SetlistInputSubmit from '../../components/SetlistInputSubmit'
import AddSong from '../../components/AddSong';
import AllSetList from '../../components/AllSetList';
import SongsSetlistDash from '../../components/SongSetlistDash';
import Loading from "../../components/Loading/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Auth0Profile from '../../components/Auth0Provider/Auth0Profile';
import API from '../../utils/API';
import axios from "axios"
import './Crud.css';


class CrudPage extends Component {
  state = {
    currentGig: null,
    currentSetlist1: null,
    currentSetlist2: null,
    gigName: "",
    setlistName: "",
    songTitle: "",
    songArtist: "",
    gigs: [],
    setlists: [],
    songs: []
  }

  componentDidMount() {

    API.findOrCreateUserbyemail(this.props.email)
      .then(res => {
        this.setState({ gigs: res.data.gigs, setlists: res.data.setlists })
      })
    // API.getGigs()
    //   .then(res => {
    //     this.setState({ gigs: res.data })
    //     // console.log(` getting gigs: ${this.state.gigs}`)
    //   })

    //   .catch(err => console.log(err));
    // API.getSetlists()
    //   .then(res => {
    //     this.setState({ setlists: res.data })
    //     // console.log(` getting setlists: ${this.state.setlists}`)
    //   })
    //   .catch(err => console.log(err))
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

  handleInput = event => {
    const { name, value } = event.target;
    console.log("EventTarget:", event.target)
    this.setState({
      [name]: value
    })
    console.log("name:", name, "value:", value)
  }

  handleGigSubmit = event => {
    event.preventDefault();

    API.saveGig({ name: this.state.gigName, user: this.props.email })
      .then(res => {
        console.log("response for HandleSubmit:", res.data)
        this.setState({
          gigs: [ ...this.state.gigs, res.data ]
        })
      })
      .catch(err => console.log(err));
  }

  handleSetlistSubmit = event => {
    event.preventDefault();
    API.saveSetlist({ name: this.state.setlistName, user: this.props.email })
      .then(res => {
        console.log("response for HandleSubmit:", res.data)
        this.setState({
          setlists: [ ...this.state.setlists, res.data ]
        })
      })
      
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

  // handleSongSubmit = () => {
  //   event.preventDefault()
  //   const newSong = { songTitle: this.state.songTitle, songArtist: this.state.songArtist}
  //   const newAllSongs = { ...this.state.songs, newSong}
  //   this.setState({ songs: newAllSongs})
  // }

  handleSongSubmit = (e) => {
    e.preventDefault()

    const songObject = {
        title: this.state.songTitle,
        artist: this.state.songArtist
    };

    console.log("songObject: ", songObject)

    axios.post('/api/lyrics/get-lyrics', songObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });

    this.setState({ songTitle: '', songArtist: '' })
}

  render() {
    console.log("THis is the CRUD email prop from auth0", this.props.email)
    return (
      <div className="bg">
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
                />

                <div className="btn-title">Add Gig:</div>
                <GigInputSubmit 
                gigSubmit={this.handleGigSubmit} 
                gigName={this.state.gigName} 
                onChange={this.handleInput} 
                />
              </Card>
            </Col >
            <Col sm="4">
              <Card className="gigsetlist">
                <GigSetList 
                setlists={this.state.setlists} 
                gigs={this.state.gigs} 
                currentGig={this.state.currentGig} 
                />
              </Card>
            </Col>
            <Col sm="4">
              <Card className="setlistsongs">
                <AllSetList 
                 currentSetlist1={this.state.currentSetlist1} 
                 setlists={this.state.setlists}
                />
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
                <SetlistInputSubmit 
                setSubmit={this.handleSetlistSubmit} 
                setlistName={this.state.setlistName} 
                onChange={this.handleInput} 
                />
              </Card>

            </Col >
            <Col sm="4">
              <Card className="setlistsongs">
                <SongsSetlistDash currentSetlist2={this.state.currentSetlist2} />
              </Card>
            </Col>
            <Col sm="4">
              <Card className="addsongs">
                <AddSong 
                handleSongSubmit={this.handleSongSubmit} 
                songTitle={this.state.songTitle} 
                songArtist={this.state.songArtist}
                onChange={this.handleInput}
              />
              </Card>
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