import React, { Component } from "react";
import uniqid from 'uniqid';

import { Header } from './components/Header';
import { ExampleCV } from "./components/ExampleCV";

import './App.css';

class App extends Component {
  constructor( props ) {
    super();
    this.state = {
      personalObject: {
        firstName: '',
        firstNameID: uniqid(),
        lastName: '',
        lastNameID: uniqid(),
        email: '',
        emailID: uniqid(),
        phoneNum: '',
        phoneNumID: uniqid(),
      },
      personalArray: [ {
        firstName: 'First Name',
        firstNameID: uniqid(),
        lastName: 'Last Name',
        lastNameID: uniqid(),
        email: 'email@rocketmail.com',
        emailID: uniqid(),
        phoneNum: '012 3456 7890',
        phoneNumID: uniqid(),
      } ],
    };
  }

  changeFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  changeLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  changePhoneNum = (e) => {
    this.setState({
      phoneNum: e.target.value,
    });
  };

  onSubmitCV = (e) => {
    e.preventDefault();
    this.setState({
      personalObject: {
        firstName: '',
        firstNameID: uniqid(),
        lastName: '',
        lastNameID: uniqid(),
        email: '',
        emailID: uniqid(),
        phoneNum: '',
        phoneNumID: uniqid(),
      },
    });
  };

  render() {
    const { personalObject, personalArray } = this.state;

    return (
      <div className='main-container' >
        <Header text='CV MAKER APP' />
        <div className='content-container'>
          <form onSubmit={ this.onSubmitCV }>
            <div className="personal-container">
              <Header text='PERSONAL INFORMATION'/>
              <div className='nameContainer'>
                <input 
                 onChange={ this.changeFirstName }
                 value={ personalObject.firstName }
                 type='text'
                 id='firstName'
                 placeholder='FIRST NAME'
                 required
                />
                <input
                 onChange={ this.changeLastName }
                 value={ personalObject.lastName }
                 type='text'
                 id='lastName'
                 placeholder='LAST NAME'
                 required
                />
              </div>
              <div className='contactContainer'>
                <input
                 onChange={ this.changeEmail }
                 value={ personalObject.email }
                 type='email'
                 id='emailInput'
                 placeholder='ENTER E-MAIL'
                 required
                />
                <input
                 onChange={ this.changePhoneNum }
                 value={ personalObject.phoneNum }
                 type='tel'
                 id='phoneNo'
                 minLength='8' 
                 maxLength='16'
                 placeholder='ENTER PHONE NUMBER'
                 required
                />
              </div>
            </div>
            <button type='submit'>SAVE CV</button>
          </form>
          <ExampleCV firstName={ personalArray[0].firstName } lastName={ personalArray[0].lastName }
           email={ personalArray[0].email } phoneNum={ personalArray[0].phoneNum }/>
        </div>
      </div>
    );
  }
}

export { App };