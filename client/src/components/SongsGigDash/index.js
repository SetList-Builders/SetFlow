import React from 'react';
import { CardHeader, CardTitle, CardText, } from 'reactstrap';

const SongsGigDash = props => {
  console.log("Songs props:", props)
  if (!props.currentSetlist1) {
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
            {props.currentSetlist1.map(songs => {
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

export default SongsGigDash;