import React from 'react';
import { Card, CardTitle, InputGroup, Input, Button } from 'reactstrap';

const AddSong = () => {
  return (
    <div>
      <CardTitle>Add a song to your Setlist</CardTitle>
      <Input className="songInput" id="songInput" placeholder="Ex. September" />
      <Input className="artistInput" id="artistInput" placeholder="Ex. Earth, Wind & Fire" />
      <Button>Submit</Button>
    </div>
  );
};

export default AddSong;