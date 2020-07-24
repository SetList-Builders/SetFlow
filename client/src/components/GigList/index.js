import React from 'react';
import InputSubmit from '../InputSubmit';
import { Card, CardTitle, CardText } from 'reactstrap';

const GigList = () => {
  return (
    <div>
      <Card body>
        <CardTitle>My Gigs</CardTitle>
        <CardText>
          <ol>
            <li>Gig 1</li>
            <li>Gig 2</li>
            <li>Gig 3</li>
            <li>Gig 4</li>
          </ol>
        </CardText>
        <div className="btn-title" >Add Gig:</div>
        <InputSubmit />
      </Card>
    </div>
  );
};

export default GigList;