import React, { useState } from 'react';

import { Header } from './components/Header';
import { PersonalForm } from './components/PersonalForm';
import { EduForm } from './components/EduForm';
import { WorkForm } from './components/WorkForm';
import { ExampleCV } from './components/ExampleCV';

import './App.css';

const App = () => {
  const [ firstName, setFirstName ] = useState( 'FIRST NAME' );
  const [ lastName, setLastName ] = useState( 'LAST NAME' );

  return (
    <div className='main-container'>
      <Header text='CV MAKER APP'/>
      <div className='content-container' >
        <div className='form-container'>
          <Header text='ENTER YOUR INFO'/>
          <PersonalForm/>
          <EduForm/>
          <WorkForm/>
        </div>
      </div>
    </div>
  )
};

export { App };