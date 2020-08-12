import React from 'react';
import { Card, CardTitle, CardText, } from 'reactstrap';
import Instructions from "../Instructions"

const AllSetList = props => {
  // console.log("AllSetList", props)
  if (!props.setlists) {
    return (
      <div className="SetlistCard d-flex flex-column">
        <div className="d-flex justify-content-center">
          <Card body className="titleBg">
            <CardTitle>My Setlists</CardTitle>
          </Card>
        </div>
        <div className="textBody">
          <CardText>
            <Instructions />
          </CardText>
        </div>
      </div>
    )
  } else {
    return (
      <div className="SetlistCard d-flex flex-column">
        <div className="d-flex justify-content-center">
          <Card body className="titleBg">
            <CardTitle>My Setlists</CardTitle>
          </Card>
        </div>
        <CardText className="textBody">
          {props.setlists.map(setlist => {
            return (
              <li className="setlistItem" id={setlist.id} key={setlist.id} onClick={() => props.allSetlistClick(setlist._id)}> {setlist.name}
              </li>
            )
          })}
        </CardText>
      </div>
    )
  }
}

export default AllSetList;