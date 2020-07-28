import React from 'react';
import InputSubmit from '../InputSubmit';
import { Card, CardTitle, CardText, } from 'reactstrap';

const AllSetList = () => {
  return (
    <Card body>
      <h4></h4>
      <CardTitle>All My SetList:</CardTitle>
      <CardText>
        <ol>
          <li>Pop Music</li>
          <li>Blues</li>
           <li>Smooth Jazz</li>
          <li>Irish Folklore</li>
          <li>Pirate Death Metal</li>
          <li>Get up, Dance</li>
          <li>Punk Rock</li>
        </ol>
      </CardText>
      <div className="btn-title" >Add Setlist:</div>
      <InputSubmit />
    </Card>

  );
};

export default AllSetList;