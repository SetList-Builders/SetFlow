import React from 'react';
import { Card, CardTitle, InputGroup, Input, Button } from 'reactstrap';

const AddSong = () => {
  return (
    <div>
      <Card body>
        <CardTitle>Add a song to your Setlist</CardTitle>
            <Input placeholder="Ex. September" /> 
            <Input placeholder="Ex. Earth, Wind & Fire" />
            <Button>Submit</Button> 
      </Card>
    </div>
  );
};

export default AddSong;