import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button
 } from 'reactstrap';

const InputSubmit = () => {
  return (
    <div>
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="prepend"><Button>Submit</Button></InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default InputSubmit;