import React from 'react';

const PersonalForm = ( props ) => {
  const formSubmit = (e) => {
    e.preventDefault();

    props.setFirstName( document.getElementById( 'firstName' ).value.toUpperCase());
    props.setLastName( document.getElementById( 'lastName' ).value.toUpperCase());
    props.setEmail( document.getElementById( 'emailInput' ).value);
    props.setPhoneNum( document.getElementById( 'phoneNum' ).value);

    document.getElementById( 'firstName' ).value = '';
    document.getElementById( 'lastName' ).value = '';
    document.getElementById( 'emailInput' ).value = '';
    document.getElementById( 'phoneNum' ).value = '';
  };

  return (
    <form onSubmit={ formSubmit }>
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