import React from 'react';
import LaunchBtn from '../LaunchBtn'
import { CardTitle, CardText } from 'reactstrap';
import DeleteBtn from '../DeleteBtn'



const GigList = props => {
  console.log(props.data.gigs)
  if (props.data.gigs.length === 0) {
    return (
      <div className="gigCard">
        <CardTitle>My Gigs</CardTitle>
        <CardText>
          <strong>No Gigs Added. <br/> To Add a gig, go to the Edit page.</strong>
        </CardText>
      </div>

    )
  } else {
    return (
      <div className="gigCard">
        <CardTitle>My Gigs</CardTitle>
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