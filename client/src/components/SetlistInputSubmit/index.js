import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from 'reactstrap';



const SetlistInputSubmit = props => {

  return (
    <div>
      <InputGroup className="mb-3">
        <Input placeholder="Name" setlistValue={props.value} />
        <InputGroupAddon addonType="prepend"><Button onClick={props.setSubmit}>Submit</Button></InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SetlistInputSubmit;