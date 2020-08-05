import React from 'react';
import { Card, CardTitle, CardText, } from 'reactstrap';
import Instructions from "../Instructions"

const AllSetList = props => {
  console.log(props.data.setlists)
  if (props.data.setlists.length === 0) {
    return (
      <div className="SetlistCard">
        <CardTitle>My Setlists</CardTitle>
        <CardText>
          <strong>No Setlist Added.</strong>
        </CardText>
      </div>
    )
  } else {
    return (
      <div className="setlistCard">
        <CardTitle>Setlists:</CardTitle>
        <CardText>
          <ol className="setlist">
            {props.data.setlists.map(setlist => {
              return (
                <li className="setlistlistItem" id={setlist.id} key={setlist.id}>{setlist.name}
                </li>
              )
            })}
          </ol>
        </CardText>
      </div>
    )
  }
}

export default AllSetList;