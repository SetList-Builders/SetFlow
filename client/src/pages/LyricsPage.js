import React, { Component } from 'react';
import NavTop from '../components/NavTop';
import { Container, FormGroup, Input, Label } from 'reactstrap';

class LyricsPage extends Component {
  render() {
    return (
      <div>
        <NavTop />
        <Container>
          <FormGroup>
            <Label for="exampleText">Name of SetList</Label>
            <Input type="textarea" name="text" id="lyrics" />
          </FormGroup>
        </Container>
      </div>
    );
  }
}

export default LyricsPage;


