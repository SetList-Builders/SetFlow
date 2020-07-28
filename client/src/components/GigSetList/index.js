import React from 'react';
import InputSubmit from '../InputSubmit';
import { Card, CardTitle, CardText, } from 'reactstrap';

const GigSetList = () => {
  return (
    <Card body>
       <CardTitle>John's Wedding</CardTitle>
      <CardTitle>SetList:</CardTitle>
      <CardText>
        <ol>
          <li>Smooth Jazz</li>
          <li>Get up, Dance</li>
          <li>Irish Folklore</li>
        </ol>
      </CardText>
      <div className="btn-title" >Add Setlist:</div>
      <InputSubmit />
    </Card>

  );
};

export default GigSetList;