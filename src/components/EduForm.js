import React from 'react';

const EduForm = ( props ) => {
  const formSubmit = (e) => {
    e.preventDefault();

    props.setSchoolName( document.getElementById( 'schoolName' ).value.toUpperCase());
    props.setStudyTitle( document.getElementById( 'studyTitle' ).value.toUpperCase());
    props.setEduStartDate( document.getElementById( 'eduStartDate' ).value );
    props.setEduEndDate( document.getElementById( 'eduEndDate' ).value );

    document.getElementById( 'schoolName' ).value = '';
    document.getElementById( 'studyTitle' ).value = '';
    document.getElementById( 'eduStartDate' ).value = '';
    document.getElementById( 'eduEndDate' ).value = '';
  };

  return (
    <form onSubmit={ formSubmit }>
      <input type='text' id='schoolName' placeholder='ENTER EDUCATION INSTITUTE NAME' required/>
      <input type='text' id='studyTitle' placeholder='ENTER TITLE OF STUDY' required />
      <div className='dateContainer'>
        <div className='startContainer'>
          <label htmlFor='eduStartDate'>EDUCATION START DATE</label>
          <input type='date' id='eduStartDate' name='eduStartDate' required/>
        </div>
        <div className='endContainer'>
          <label htmlFor='eduEndDate'>EDUCATION END DATE</label>
          <input type='date' id='eduEndDate' name='eduEndDate' required />
        </div>
      </div>
      <button type='submit'>SAVE EDUCATION INFORMATION</button>
    </form>
  )
};

export { EduForm };