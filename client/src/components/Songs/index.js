import React from 'react';
import InputSubmit from '../GigInputSubmit';
import { Card, CardTitle, CardText, } from 'reactstrap';

const Songs = props => {
  return (
    <Card body>
      <CardTitle></CardTitle>
      <CardText>
        <ol>
        {props.data.setlists.map(setlist => {
              return (
                <li className="setlistlistItem" id={setlist.id} key={setlist.id}>{setlist.songs}
                </li>
              )
            })}
        </ol>
      </CardText>
    </Card>

  );
};

export default Songs;