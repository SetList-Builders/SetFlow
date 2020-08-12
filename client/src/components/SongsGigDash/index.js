import React from 'react';
import { Card, CardTitle, CardText, } from 'reactstrap';

const SongsGigDash = props => {
  // console.log("Songs props:", props)
  if (!props.currentSetlist1) {
    return (
      <div className="SetlistCard d-flex flex-column">
        <div className="d-flex justify-content-center">
          <Card body className="titleBg">
            <CardTitle>SetList Name</CardTitle>
            <h5>Songs:</h5>
          </Card>
        </div>
        <CardText className="textBody">
          <i>No songs have been added to this setlist.</i>
        </CardText>
      </div>
    )
  } else {
    return (
      <div className="SetlistCard d-flex flex-column">
        <div className="d-flex justify-content-center">
        </div>
        <Card body className="titleBg">
          <CardTitle>Songs:</CardTitle>
        </Card>
        <CardText className="textBody">
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