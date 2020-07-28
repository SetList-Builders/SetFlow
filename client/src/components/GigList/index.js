import React from 'react';
import LaunchBtn from '../LaunchBtn'
import InputSubmit from '../InputSubmit';
import { Card, CardTitle, CardText } from 'reactstrap';
import DeleteBtn from '../DeleteBtn'


const GigList = () => {
  return (
    <div>
      <Card body>
        <CardTitle>My Gigs</CardTitle>
        <CardText>
          <ol>
            <li>John's Wedding <DeleteBtn/></li>
            <LaunchBtn />
            <li>Bar Mitzvah <DeleteBtn/> </li>
            <LaunchBtn />
            <li>Quinceañera <DeleteBtn/></li>
            <LaunchBtn />
            <li>Lavish Night Club <DeleteBtn/></li>
            <LaunchBtn />
          </ol>
        </CardText>
      </Card>
    </div>
  );
};

export default GigList;