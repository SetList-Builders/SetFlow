import React from 'react';
import { Button } from 'reactstrap';
import './style.css';

const LaunchBtn = ({ handleLaunchClick }) => {
return (
  <Button outline size="sm" onClick={handleLaunchClick} >🚀 Launch</Button>
)
};

export default LaunchBtn;


