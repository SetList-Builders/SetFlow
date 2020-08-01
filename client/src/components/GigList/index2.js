import React from 'react';
import LaunchBtn from '../LaunchBtn'
import { Card, CardTitle, CardText } from 'reactstrap';
import DeleteBtn from '../DeleteBtn'

const GigList = props => {
    return (props.gigs.length === 0) ? (
        <div className="gigCard">
           <CardTitle>My Gigs</CardTitle> 
           <CardText>
               <h2>
                  No gigs added.  To add a gig, go to the Edit page.
               </h2>
           </CardText>
        </div>
    ) :
    (
        <div className="gigCard">
            <CardTitle>My Gigs</CardTitle>
            <CardText>
            <ol className="gigList">
                {props.gigs.map(gig => {
                    return (
                            <li className="gigItem" id={gig.name} key={gig.id}>{gig.name} <DeleteBtn/> <LaunchBtn/>
                            </li>
                    )
                })}
            </ol>
            </CardText>
        </div>
    )
}

export default GigList