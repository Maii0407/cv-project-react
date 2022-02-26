import React from 'react';

const EduForm = ( props ) => {
  return (
    <form>
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