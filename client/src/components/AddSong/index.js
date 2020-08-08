import React from 'react';
import { Card, CardTitle, InputGroup, Input, Button } from 'reactstrap';

const AddSong = () => {
  return (
    <div>
      <Card body style={{ backgroundColor: "#080939", border: "solid 3px #cea935", color: "#cea935", margin: "20px" }}>
        <CardTitle>Add a song to your Setlist</CardTitle>
            <Input id="songInput" placeholder="Ex. September" /> 
            <Input id="artistInput" placeholder="Ex. Earth, Wind & Fire" />
            <Button>Submit</Button> 
      </Card>
    </div>
  );
};

export default AddSong;