import React, { Component } from "react";

import { Header } from './components/Header';
import { ExampleCV } from "./components/ExampleCV";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='main-container' >
        <Header text='CV MAKER APP' />
        <div className='content-container'>
          <form>
            <div className="personal-container">
              <Header text='PERSONAL INFORMATION'/>
              <div className='nameContainer'>
                <input type='text' id='firstName' placeholder='FIRST NAME'/>
                <input type='text' id='lastName' placeholder='LAST NAME'/>
              </div>
              <div className='contactContainer'>
                <input type='email' id='emailInput' placeholder='ENTER E-MAIL'/>
                <input type='tel' id='phoneNo' minLength='8' 
                 maxLength='16' placeholder='ENTER PHONE NUMBER'/>
              </div>
            </div>
            <button type='submit'>SAVE CV</button>
          </form>
          <ExampleCV/>
        </div>
      </div>
    );
  }
}

export { App }; 