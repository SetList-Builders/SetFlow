import React from 'react';
import { CardTitle, CardText, } from 'reactstrap';

const GigSetList = () => {
  return (
    <div>
      <CardTitle>John's Wedding</CardTitle>
      <CardTitle>Setlist:</CardTitle>
      <CardText>
        <ol>
          <li>Smooth Jazz</li>
          <li>Get up, Dance</li>
          <li>Irish Folklore</li>
        </ol>
      </CardText>
    </div>
  );
};

export default GigSetList;