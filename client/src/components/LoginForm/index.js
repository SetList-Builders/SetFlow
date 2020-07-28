import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email:</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="SetFlow@gmail.com" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password:</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="must have at least 6 characters" />
      </FormGroup>
    </Form>
  );
};

export default LoginForm;