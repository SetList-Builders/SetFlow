import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from 'reactstrap';



const GigInputSubmit = props => {

  return (
    <div>
      <InputGroup className="mb-3">
        <Input placeholder="Name" gigValue={props.value} />
        <InputGroupAddon addonType="prepend"><Button onClick={props.gigSubmit}>Submit</Button></InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default GigInputSubmit;