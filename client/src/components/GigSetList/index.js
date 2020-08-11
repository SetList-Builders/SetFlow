import React from 'react';
import { CardTitle, CardText, } from 'reactstrap';

const GigSetList = props => {
  console.log("GigSetList Component:", props)
  console.log("gigs:", props.gigs)
  console.log("setlists:", props.setlists)

  if (!props.currentGig) {
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
        </div>
        <CardTitle>{props.currentGig.name}</CardTitle>
        <CardText>
          <ol>
            {props.currentGig.setlists.map(setlist => {
              return (
                <li className="setlistlistItem" id={setlist.id} key={setlist.id} onClick={() => props.handleSetlistClick(setlist._id)}>{setlist.name}
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