import React from 'react';

const WorkForm = ( props ) => {
  return (
    <form>
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