import React from 'react';
import { Card, CardTitle, CardText, } from 'reactstrap';
import Instructions from "../Instructions"

const AllSetList = props => {
// console.log("AllSetList", props)
  if (!props.setlists) {
    return (
      <div className="SetlistCard d-flex flex-column">
        <div className="d-flex justify-content-center">
          <CardTitle>My Setlists</CardTitle>
        </div>
        <CardText>
          <Instructions />
        </CardText>
      </div>
    )
  } else {
    return (
      <div className="SetlistCard d-flex flex-column">
        <div className="d-flex justify-content-center">
          <CardTitle>My Setlists</CardTitle>
        </div>
        <CardText>
          {props.setlists.map(setlist => {
            return (
              <li id={setlist.id} key={setlist.id} onClick={() => props.allSetlistClick(setlist._id)}> {setlist.name}
              </li>
            )
          })}
        </CardText>
      </div>
    )
  }
}

export default AllSetList;