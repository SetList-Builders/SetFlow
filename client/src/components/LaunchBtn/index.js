import React from 'react';
import { Button } from 'reactstrap';
import './style.css';

const LaunchBtn = ({ handleLaunchClick, id }) => {
  console.log('key:', id)
  return (
    <Button 
    className="LaunchBtn" 
    outline size="sm" 
    onClick={() => handleLaunchClick(id)} >
      🚀 Launch
    </Button >
  )
};

export default LaunchBtn;


