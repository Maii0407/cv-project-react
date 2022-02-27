import React from 'react';

const WorkForm = ( props ) => {
  const formSubmit = (e) => {
    e.preventDefault();

    props.setCompanyName( document.getElementById( 'companyName' ).value.toUpperCase());
    props.setPositionTitle( document.getElementById( 'positionTitle' ).value.toUpperCase());
    props.setWorkStartDate( document.getElementById( 'workStartDate' ).value );
    props.setWorkEndDate( document.getElementById( 'workEndDate' ).value );

    document.getElementById( 'companyName' ).value = '';
    document.getElementById( 'positionTitle' ).value = '';
    document.getElementById( 'workStartDate' ).value = '';
    document.getElementById( 'workEndDate' ).value = '';
  };

  return (
    <form onSubmit={ formSubmit }>
      <input type='text' id='companyName' placeholder='ENTER COMPANY NAME' required />
      <input type='text' id='positionTitle' placeholder='ENTER POSIITON TITLE' required />
      <div className='dateContainer'>
        <div className='startContainer'>
          <label htmlFor='workStartDate'>JOB START DATE</label>
          <input type='date' id='workStartDate' name='workStartDate' required />
        </div>
        <div className='endContainer'>
          <label htmlFor='workEndDate'>JOB END DATE</label>
          <input type='date' id='workEndDate' name='workEndDate' required />
        </div>
      </div>
      <button type='submit'>SAVE WORK EXPERIENCE INFROMATION</button>
    </form>
  )
};

export { WorkForm }