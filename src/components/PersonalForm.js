import React from 'react';

const PersonalForm = ( props ) => {
  return (
    <form>
      <div className='nameContainer'>
        <input type='text' id='firstName' placeholder='FIRST NAME' required/>
        <input type='text' id='lastName' placeholder='LAST NAME' required/>
      </div>
      <div className='contactContainer'>
        <input type='email' id='emailInput' placeholder='ENTER E-MAIL' required/>
        <input type='tel' id='phoneNum' placeholder='ENTER PHONE NUMBER' minLength='8' maxLength='16' required/>
      </div>
      <button type='submit'>SAVE PERSONAL INFORMATION</button>
    </form>
  )
};

export { PersonalForm };