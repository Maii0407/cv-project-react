import React, { Component } from "react";
import uniqid from 'uniqid';

import { Header } from './components/Header';
import { ExampleCV } from "./components/ExampleCV";

import './App.css';

class App extends Component {
  constructor( props ) {
    super();
    this.state = {
      firstName: { text: '', id: uniqid() },
      lastName: { text: '', id: uniqid() },
      email: { text: '', id: uniqid() },
      phoneNum: { text: '', id: uniqid() },

      firstNameArray: [{ text: 'First Name', id: uniqid() }],
      lastNameArray: [{ text: 'Last Name', id: uniqid() }],
      emailArray: [{ text: 'email@rocketmail.com', id: uniqid() }],
      phoneNumArray: [{ text: '012 3456 7890', id: uniqid() }],
    };
  }

  changeFirstName = (e) => {
    this.setState({
      firstName: { text: e.target.value, id: this.state.firstName.id },
    });
  };

  changeLastName = (e) => {
    this.setState({
      lastName: { text: e.target.value, id: this.state.firstName.id },
    });
  };

  changeEmail = (e) => {
    this.setState({
      email: { text: e.target.value, id: this.state.firstName.id },
    });
  };

  changePhoneNum = (e) => {
    this.setState({
      phoneNum: { text: e.target.value, id: this.state.firstName.id },
    });
  };

  onSubmitCV = (e) => {
    e.preventDefault();
    this.setState({
      firstNameArray: [ this.state.firstName, ...this.state.firstNameArray ],
      lastNameArray: [ this.state.lastName, ...this.state.lastNameArray ],
      emailArray: [ this.state.email, ...this.state.emailArray ],
      phoneNumArray: [ this.state.phoneNum, ...this.state.phoneNumArray ],
      
      firstName: { text: '', id: uniqid() },
      lastName: { text: '', id: uniqid() },
      email: { text: '', id: uniqid() },
      phoneNum: { text: '', id: uniqid() },
    });
  };

  render() {
    const { firstName, lastName, email, phoneNum,
            firstNameArray, lastNameArray, emailArray, phoneNumArray } = this.state;

    return (
      <div className='main-container' >
        <Header text='CV MAKER APP' />
        <div className='content-container'>
          <form onSubmit={ this.onSubmitCV }>
            <Header text='ENTER YOUR INFO'/>
            <div className='nameContainer'>
              <input onChange={ this.changeFirstName } value={ firstName.text } type='text' id='firstName' placeholder='FIRST NAME' required/>
              <input onChange={ this.changeLastName } value={ lastName.text } type='text' id='lastName' placeholder='LAST NAME' required/>
            </div>
            <div className='contactContainer'>
              <input onChange={ this.changeEmail } value={ email.text } type='email' id='emailInput' placeholder='ENTER E-MAIL' required/>
              <input onChange={ this.changePhoneNum } value={ phoneNum.text } type='tel' id='phoneNo' minLength='8'  maxLength='16' placeholder='ENTER PHONE NUMBER' required/>
            </div>
            <button type='submit'>SAVE CV</button>
          </form>
          <ExampleCV  fnArray={ firstNameArray } lnArray={ lastNameArray } eArray={ emailArray } pnArray={ phoneNumArray }/>
        </div>
      </div>
    );
  }
}

export { App };