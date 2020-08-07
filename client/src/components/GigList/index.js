import React from 'react';
import LaunchBtn from '../LaunchBtn'
import { CardTitle, CardText } from 'reactstrap';
import DeleteBtn from '../DeleteBtn'
import Instructions from "../Instructions"


const GigList = props => {
  console.log(props.data.gigs)
  if (props.data.gigs.length === 0) {
    return (
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center">
          <CardTitle className="title">My Gigs</CardTitle>
        </div>
          <CardText className="gigtext">
            <strong>No Gigs Added.</strong>
          </CardText>
      </div>
    )
  } else {
    return (
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center">
          <CardTitle className="title">My Gigs</CardTitle>
        </div>
        <CardText>
          <ol className="gigList">
            {props.data.gigs.map(gig => {
              return (
                <li className="gigItem" id={gig.name} key={gig.id} onClick={() => this.handleclick()}>{gig.name} <DeleteBtn /> <LaunchBtn />
                </li>
              )
            })}
          </ol>
        </CardText>

      </div>
    )
  }
}

export default GigList