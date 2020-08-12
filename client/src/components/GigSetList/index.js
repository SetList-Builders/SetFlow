import React from 'react';
import { CardTitle, CardText, Card } from 'reactstrap';

const GigSetList = props => {
  // console.log("GigSetList Component:", props)
  // console.log("gigs:", props.gigs)
  // console.log("setlists:", props.setlists)

  if (!props.currentGig) {
    return (
      <div className="SetlistCard d-flex flex-column">
        <div className="d-flex justify-content-center">
          <Card body className="titleBg">
            <CardTitle>Gig Name</CardTitle>
            <h5>Setlists:</h5>
          </Card>
        </div>
        <div className="textBody">
          <CardText>
            <i>No Setlist have been added to this gig.</i>
          </CardText>
        </div>
      </div>
    )
  } else {
    return (
      <div className="SetlistCard d-flex flex-column">
        <div className="d-flex justify-content-center">
        </div>
        <Card body className="titleBg">
          <CardTitle>{props.currentGig.name}</CardTitle>
          <h5>Setlists:</h5>
        </Card>
        <CardText>
          <ol>
            {props.currentGig.setlists.map(setlist => {
              return (
                <li className="setlistlistItem" id={setlist.id} key={setlist.id} onClick={() => props.setlistClickTop(setlist._id)}>{setlist.name}
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