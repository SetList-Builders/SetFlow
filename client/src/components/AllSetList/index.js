import React from 'react';
import InputSubmit from '../InputSubmit';
import { Card, CardTitle, CardText, } from 'reactstrap';

const AllSetList = props => {
  console.log(props.data.setlists)
  if (props.data.setlists.length === 0) {
    return (
      <div className="gigCard">
      <CardTitle>My Gigs</CardTitle>
      <CardText>
        <strong>No Setlist have been created. <br /> To Create a Setlist, Go to the Edit Page.</strong>
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