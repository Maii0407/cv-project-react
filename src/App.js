import React, { Component } from "react";
import './App.css';
import { Header } from './components/Header';
import { PerSection } from './components/PerSection';
import { EduSection } from './components/EduSection';
import { ExpSection } from './components/ExpSection';

class App extends Component {
  render() {
    return (
      <div className='main-container' >
        <Header text='CV MAKER APP' />
        <div className="form-container">
          <form>
            <div className="perSection-wrapper">
              <Header text='PERSONAL INFORMATION'/>
              <PerSection/>
            </div>
            <div className="eduSection-wrapper">
              <Header text='EDUCATION AND TRAINING INFROMATION'/>
              <EduSection/>
            </div>
            <div>
              <button type='button'>Add Education</button>
            </div>
            <div className="expSection-wrapper">
              <Header text='PROFESSIONAL EXPERIENCE INFORMATION'/>
              <ExpSection/>
            </div>
            <div>
              <button type='button'>Add Professional Experience</button>
            </div>
            <div>
              <button type='submit'>Generate CV</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export { App }; 