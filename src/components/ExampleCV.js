import React from 'react';

import { Header } from './Header';

import './styles/ExampleCV.css';

const ExampleCV = ( props ) => {
  return (
    <div className='cv-container'>
      <Header text='PERSONAL INFORMATION'/>
      <div className='userName'>
        <p>{ props.firstName }</p>
        <p>{ props.lastName }</p>
      </div>
      <p>{ props.email }</p>
      <p>{ props.phoneNum }</p>
      <Header text='EDUCATION INFORMATION'/>
      <p>{ props.schoolName }</p>
      <p>{ props.studyTitle }</p>
      <div className='dates'>
        <p>FROM: { props.eduStartDate }</p>
        <p>TO: { props.eduEndDate }</p>
      </div>
      <Header text='PROFESSIONAL EXPERIENCE INFORMATION'/>
      <p>{ props.companyName }</p>
      <p>{ props.positionTitle }</p>
      <div className='dates'>
        <p>FROM: { props.workStartDate }</p>
        <p>TO: { props.workEndDate }</p>
      </div>
    </div>
  )
};

export { ExampleCV }