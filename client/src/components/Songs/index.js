import React from 'react';
import InputSubmit from '../GigInputSubmit';
import { Card, CardTitle, CardText, } from 'reactstrap';

const Songs = props => {
  if (props.data.setlists.length === 0) {
    return (
      <div className="SetlistCard d-flex flex-column">
        <div className="d-flex justify-content-center">
          <CardTitle>SetList Name</CardTitle>
        </div>
        <CardTitle>Songs:</CardTitle>
        <CardText>
          <i>No songs have been added to this setlist.</i>
        </CardText>
      </div>
    )
  } else {
  return (
    <div className="SetlistCard d-flex flex-column">
        <div className="d-flex justify-content-center">
          <CardTitle>SetList Name</CardTitle>
        </div>
      <CardTitle>Songs:</CardTitle>
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
    </div>

  );
};
};

export default Songs;