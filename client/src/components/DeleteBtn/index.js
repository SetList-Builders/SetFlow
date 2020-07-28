import React from 'react';
import { Button } from 'reactstrap';

const deleteBtn = () => {
  return (
    <Button close><span aria-hidden="true">–</span></Button>
  );
};

export default deleteBtn;