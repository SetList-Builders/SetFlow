import React from 'react';
import { Card, CardTitle, InputGroup, Input, Button } from 'reactstrap';

const AddSong = ({songTitle, songArtist, handleSongSubmit, onChange}) => {
  return (
    <div>
        <CardTitle>Add a song to your Setlist</CardTitle>
            <Input id="songInput" name="songTitle" value={songTitle} onChange={onChange} placeholder="Ex. September" /> 
            <Input id="artistInput" name="songArtist"  value={songArtist} onChange={onChange} placeholder="Ex. Earth, Wind & Fire" />
            <Button onClick={handleSongSubmit}>Submit</Button> 
    </div>
  );
};

export default AddSong;