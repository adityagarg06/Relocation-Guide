import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './About.css'

function About() {
  return (
    <div className='about'>
      <h1>Are you a student going abroad for education? Don’t know how you will manage everything on your own there? Well…We’ve got you covered
      </h1>
      <hr/>
      <div className='button'>
      <Link to='/signup'>
      <Button buttonStyle='btn--outline'>GET STARTED</Button>
      </Link>
      </div>
    </div>
  );
}

export default About;