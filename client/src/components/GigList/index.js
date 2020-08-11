import React from 'react';
import LaunchBtn from '../LaunchBtn'
import { CardTitle, CardText } from 'reactstrap';
import DeleteBtn from '../DeleteBtn'
import Instructions from "../Instructions"
import API from '../../utils/API';

const GigList = props => {
  // console.log(`GigList Component: ${props}`)
  if (!props.gigs) {
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
            {props.gigs.map(gig => {
              return (
                <li className="gigItem" id={gig.name} key={gig._id} onClick={() => props.handleGigClick(gig._id)}>{gig.name} <LaunchBtn />
                </li>
              )
            })}
        </CardText>

      </div>
    )
  }
}

export default GigList