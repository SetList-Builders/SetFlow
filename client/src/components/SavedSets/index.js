import React from 'react';
import { CardTitle, CardText, } from 'reactstrap';

const SavedSets = () => {
  return (
    <div>
      <CardTitle>Available setlists to add to your gig</CardTitle>
      <CardText>
        <ol>
          <li>Smooth Jazz</li>
          <li>Get up, Dance</li>
          <li>Irish Folklore</li>
          <li>Hello Kitty Death Metal</li>
        </ol>
      </CardText>
    </div>
  );
};

export default SavedSets;