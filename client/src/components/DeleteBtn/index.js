import React from 'react';
import { Button } from 'reactstrap';

const DeleteBtn = () => {
  return (
    <Button close><span aria-hidden="true">–</span></Button>
  );
};

export default DeleteBtn;