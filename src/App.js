import React, { Component } from "react";

import { Header } from './components/Header';
import { ExampleCV } from "./components/ExampleCV";

import './App.css';

class App extends Component {
  constructor( props ) {
    super();
    this.state = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'email@rocketmail.com',
      phoneNum: '012 3456 7890',
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
      firstName: '',
      lastName: '',
      email: '',
      phoneNum: '',
    });
  };

  render() {
    const { firstName, lastName, email, phoneNum } = this.state;

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
                 value={ firstName }
                 type='text'
                 id='firstName'
                 placeholder='FIRST NAME'
                 required
                />
                <input
                 onChange={ this.changeLastName }
                 value={ lastName }
                 type='text'
                 id='lastName'
                 placeholder='LAST NAME'
                 required
                />
              </div>
              <div className='contactContainer'>
                <input
                 onChange={ this.changeEmail }
                 value={ email }
                 type='email'
                 id='emailInput'
                 placeholder='ENTER E-MAIL'
                 required
                />
                <input
                 onChange={ this.changePhoneNum }
                 value={ phoneNum }
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
          <ExampleCV firstName={ firstName } lastName={ lastName }
           email={ email } phoneNum={ phoneNum }/>
        </div>
      </div>
    );
  }
}

export { App };