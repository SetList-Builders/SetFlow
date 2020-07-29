import React from 'react';
import InputSubmit from '../InputSubmit';
import { Card, CardTitle, CardText, } from 'reactstrap';

const Songs = () => {
  return (
    <Card body>
      <CardTitle>Smooth Jazz</CardTitle>
      <CardText>
        <ol>
          <li>Top Down</li>
          <li>Backyard Brew</li>
          <li>The King is Here</li>
          <li>Stylin</li>
        </ol>
      </CardText>
    </Card>

  );
};

export default Songs;