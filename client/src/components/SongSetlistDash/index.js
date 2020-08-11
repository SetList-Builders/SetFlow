import React from 'react';
import { Card, CardTitle, CardText, } from 'reactstrap';

const Songs = props => {
  // console.log("Songs props:", props)
  if (!props.currentSetlist) {
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
        </div>
        <CardTitle>Songs:</CardTitle>
        <CardText>
          <ol>
            {props.currentSetlist2.map(songs => {
              return (
                <li className="setlistlistItem" id={songs.id} key={songs.id}>{songs.songName}
                </li>
              )
            })}
          </ol>
        </CardText>
      </div>

    );
  };
};

export default SongsSetlistDash;