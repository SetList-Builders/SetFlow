import React from 'react';
import { CardTitle, CardText, } from 'reactstrap';

const GigSetList = props => {
  if (props.data.setlists.length === 0) {
    return (
      <div className="SetlistCard d-flex flex-column">
        <div className="d-flex justify-content-center">
          <CardTitle>Gig Name</CardTitle>
        </div>
        <CardTitle>Setlists:</CardTitle>
        <CardText>
          <i>No Setlist have been added to this gig.</i>
        </CardText>
      </div>
    )
  } else {
    return (
      <div className="SetlistCard d-flex flex-column">
        <div className="d-flex justify-content-center">
          <CardTitle>Gig Name</CardTitle>
        </div>
        <CardTitle>Setlists:</CardTitle>
        <CardText>
          <ol>
            {props.data.gigs.map(setlists => {
              return (
                <li className="setlistlistItem" id={setlists.id} key={setlists.id}>{setlists.name}
                </li>
              )
            })}
          </ol>
        </CardText>
      </div>
    );
  }

};

export default GigSetList;