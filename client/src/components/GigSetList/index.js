import React from 'react';
import { CardTitle, CardText, } from 'reactstrap';

const GigSetList = props => {
  return (
    <div>
      <CardTitle></CardTitle>
      <CardTitle>Setlist:</CardTitle>
      <CardText>
        <ol>
        {props.data.setlists.map(setlist => {
              return (
                <li className="setlistlistItem" id={setlist.id} key={setlist.id}>{setlist.name}
                </li>
              )
            })}
        </ol>
      </CardText>
    </div>
  );
};

export default GigSetList;