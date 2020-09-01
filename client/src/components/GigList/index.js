import React from 'react';
import LaunchBtn from '../LaunchBtn'
import { CardTitle, CardText, Card } from 'reactstrap';
import { Link } from "react-router-dom";


const GigList = props => {
  // console.log(`GigList Component: ${props}`)
  if (!props.gigs) {
    return (
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center">
          <Card body className="titleBg">
            <CardTitle className="title">My Gigs</CardTitle>
          </Card>
        </div>
        <div className="textBody">
          <CardText className="gigtext">
            <strong>No Gigs Added.</strong>
          </CardText>
        </div>

      </div>
    )
  } else {
    return (
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center">
          <Card body className="titleBg">
            <CardTitle className="title">My Gigs</CardTitle>
          </Card>
        </div>
        <CardText>
          {props.gigs.map(gig => {
            return (
              <div className="textBody">
                <li 
                  className="gigItem" 
                  id={gig._id} 
                  key={gig._id} 
                  onClick={() => props.handleGigClick(gig._id)}>
                  {gig.name}
                </li>
                <Link to={"/launched/" + gig._id}>
                  <LaunchBtn 
                    onClick={() => props.handleGigClick(gig._id)}
                    gigName={gig.name}
                    id={gig._id} 
                  />
                </Link>
              </div>
            )
          })}
        </CardText>

      </div>
    )
  }
}

export default GigList