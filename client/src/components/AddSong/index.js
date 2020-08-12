import React from 'react';
import { Card, CardTitle, InputGroup, Input, Button } from 'reactstrap';

const AddSong = ({ songTitle, songArtist, handleSongSubmit, onChange }) => {
  return (
    <div className="SetlistCard d-flex flex-column">
      <div className="d-flex justify-content-center">
        <Card body className="titleBg">
          <CardTitle>Add a Song to Your Setlist</CardTitle>
        </Card>
      </div>
      <div className="textBody">
      <Input id="songInput" name="songTitle" value={songTitle} onChange={onChange} placeholder="Song Title" />
      <Input id="artistInput" name="songArtist" value={songArtist} onChange={onChange} placeholder="Artist Name" />
      <Button onClick={handleSongSubmit}>Submit</Button>
    </div>
    </div>
  );
};

export default AddSong;