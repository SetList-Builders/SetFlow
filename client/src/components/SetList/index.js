import React from 'react';
import InputSubmit from '../InputSubmit';
import { Card, CardTitle, CardText, } from 'reactstrap';

const SetList = () => {
  return (
    <Card body>
      <CardTitle>SetList</CardTitle>
      <CardText>
        <ol>
          <li>Tough Crowd</li>
          <li>Karen and the Managers</li>
          <li>Irish Folklore</li>
          <li>Pirate Death Metal</li>
        </ol>
      </CardText>
      <div className="btn-title" >Add Setlist:</div>
      <InputSubmit />
    </Card>





  );
};

export default SetList;