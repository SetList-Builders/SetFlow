import React from 'react';
import { Card, CardTitle, CardText, } from 'reactstrap';
import Instructions from "../Instructions"

const AllSetList = props => {
  console.log(props.data.setlists)
  if (props.data.setlists.length === 0) {
    return (
      <div className="SetlistCard d-flex flex-column">
        <div className="d-flex justify-content-center">
          <CardTitle>My Setlists</CardTitle>
        </div>
        <CardText>
          <Instructions/>
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