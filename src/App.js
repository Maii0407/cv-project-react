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
  const [ email, setEmail ] = useState( 'email@rocketmail.com' );
  const [ phoneNum, setPhoneNum ] = useState( '012 3456 7890' );

  const [ schoolName, setSchoolName ] = useState( 'EDUCATION INSTITUTE' );
  const [ studyTitle, setStudyTitle ] = useState( 'TITLE OF STUDY' );
  const [ eduStartDate, setEduStartDate ] = useState( '07/04/1998' );
  const [ eduEndDate, setEduEndDate ] = useState( '02/27/2022' );

  const [ companyName, setCompanyName ] = useState( 'COMPANY NAME' );
  const [ positionTitle, setPositionTitle ] = useState( 'POSITION TITLE' );
  const [ workStartDate, setWorkStartDate ] = useState( '07/04/2017' );
  const [ workEndDate, setWorkEndDate ] = useState( '02/27/2022' );

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
        <ExampleCV 
        firstName={ firstName } 
        lastName={ lastName } 
        email={ email }
        phoneNum={ phoneNum }
        schoolName={ schoolName } 
        studyTitle={ studyTitle }
        eduStartDate={ eduStartDate }
        eduEndDate={ eduEndDate }
        companyName={ companyName }
        positionTitle={ positionTitle }
        workStartDate={ workStartDate }
        workEndDate={ workEndDate }
        />
      </div>
    </div>
  )
};

export { App };