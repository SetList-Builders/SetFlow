import React, { Component } from 'react';
import NavTop from '../components/NavTop';
import GigList from '../components/GigList';
import GigSetList from '../components/GigSetList'
import AllSetList from '../components/AllSetList';
import Songs from '../components/Songs';
import { Row, Col, Container, Card } from 'reactstrap';
import API from '../utils/API';

class MainPage extends Component {
    state = {
        gigs: [],
        setlists: [],
        songs: []
    }

    componentDidMount() {
        API.getGigs()
          .then(res => this.setState({ gigs: res.data }))
          .catch(err => console.log(err));
        API.getSetlists()
          .then(res => this.setState({ setlists: res.data }))
          .catch(err => console.log(err))
    }
}