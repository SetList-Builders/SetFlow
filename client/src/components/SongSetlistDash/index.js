import React from 'react';
import { Card, CardTitle, CardText, } from 'reactstrap';

const SongsSetlistDash = props => {
  // console.log("Songs props:", props)
  if (!props.currentSetlist2) {
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