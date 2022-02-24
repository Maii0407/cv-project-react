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

      schoolName: { text:'', id: uniqid() },
      studyTitle: { text:'', id: uniqid() },
      eduStartDate: { text:'', id: uniqid() },
      eduEndDate: { text:'', id: uniqid() },

      companyName: { text:'', id: uniqid() },
      positionTitle: { text:'', id: uniqid() },
      workStartDate: { text:'', id: uniqid() },
      workEndDate: { text:'', id: uniqid() },

      firstNameArray: [{ text: 'First Name', id: uniqid() }],
      lastNameArray: [{ text: 'Last Name', id: uniqid() }],
      emailArray: [{ text: 'email@rocketmail.com', id: uniqid() }],
      phoneNumArray: [{ text: '012 3456 7890', id: uniqid() }],

      schoolNameArray: [{ text: 'Education Institute', id: uniqid() }],
      studyTitleArray: [{ text: 'Title of Study', id: uniqid() }],
      eduStartDateArray: [{ text: '04/07/1998', id: uniqid() }],
      eduEndDateArray: [{ text: '02/24/2022', id: uniqid() }],

      companyNameArray: [{ text: 'Company Name', id: uniqid() }],
      posiitonTitleArray: [{ text: 'Position Title', id: uniqid() }],
      workStartDateArray: [{ text: '04/07/2016', id: uniqid() }],
      workEndDateArray: [{ text: '02/24/2022', id: uniqid() }],
    };
  }

  changeFirstName = (e) => {
    this.setState({
      firstName: { text: e.target.value, id: this.state.firstName.id },
    });
  };
  changeLastName = (e) => {
    this.setState({
      lastName: { text: e.target.value, id: this.state.lastName.id },
    });
  };
  changeEmail = (e) => {
    this.setState({
      email: { text: e.target.value, id: this.state.email.id },
    });
  };
  changePhoneNum = (e) => {
    this.setState({
      phoneNum: { text: e.target.value, id: this.state.phoneNum.id },
    });
  };

  changeSchoolName = (e) => {
    this.setState({
      schoolName: { text: e.target.value, id: this.state.schoolName.id },
    });
  };
  changeStudyTitle = (e) => {
    this.setState({
      studyTitle: { text: e.target.value, id: this.state.studyTitle.id },
    });
  };
  changeEduStartDate = (e) => {
    this.setState({
      eduStartDate: { text: e.target.value, id: this.state.eduStartDate.id },
    });
  };
  changeEduEndDate = (e) => {
    this.setState({
      eduEndDate: { text: e.target.value, id: this.state.eduEndDate.id },
    });
  };

  changeCompanyName = (e) => {
    this.setState({
      companyName: { text: e.target.value, id: this.state.companyName.id },
    });
  };
  changePositionTitle = (e) => {
    this.setState({
      positionTitle: { text: e.target.value, id: this.state.positionTitle.id },
    });
  };
  changeWorkStartDate = (e) => {
    this.setState({
      workStartDate: { text: e.target.value, id: this.state.workStartDate.id },
    });
  };
  changeWorkEndDate = (e) => {
    this.setState({
      workEndDate: { text: e.target.value, id: this.state.workEndDate.id },
    });
  };

  onSubmitCV = (e) => {
    e.preventDefault();
    this.setState({
      firstNameArray: [ this.state.firstName, ...this.state.firstNameArray ],
      lastNameArray: [ this.state.lastName, ...this.state.lastNameArray ],
      emailArray: [ this.state.email, ...this.state.emailArray ],
      phoneNumArray: [ this.state.phoneNum, ...this.state.phoneNumArray ],
      schoolNameArray: [ this.state.schoolName, ...this.state.schoolNameArray ],
      studyTitleArray: [ this.state.studyTitle, ...this.state.studyTitleArray ],
      eduStartDateArray: [ this.state.eduStartDate, ...this.state.eduStartDateArray ],
      eduEndDateArray: [ this.state.eduEndDate, ...this.state.eduEndDateArray ],
      companyNameArray: [ this.state.companyName, ...this.state.companyNameArray ],
      posiitonTitleArray: [ this.state.positionTitle, ...this.state.posiitonTitleArray ],
      workStartDateArray: [ this.state.workStartDate, ...this.state.workStartDateArray ],
      workEndDateArray: [ this.state.workEndDate, ...this.state.workEndDateArray ],
      
      firstName: { text: '', id: uniqid() },
      lastName: { text: '', id: uniqid() },
      email: { text: '', id: uniqid() },
      phoneNum: { text: '', id: uniqid() },
      schoolName: { text:'', id: uniqid() },
      studyTitle: { text:'', id: uniqid() },
      eduStartDate: { text:'', id: uniqid() },
      eduEndDate: { text:'', id: uniqid() },
      companyName: { text:'', id: uniqid() },
      positionTitle: { text:'', id: uniqid() },
      workStartDate: { text:'', id: uniqid() },
      workEndDate: { text:'', id: uniqid() },
    });
  };

  render() {
    const { firstName, lastName, email, phoneNum,
            firstNameArray, lastNameArray, emailArray, phoneNumArray,
            schoolName, studyTitle, eduStartDate, eduEndDate,
            schoolNameArray, studyTitleArray, eduStartDateArray, eduEndDateArray,
            companyName, positionTitle, workStartDate, workEndDate,
            companyNameArray, posiitonTitleArray, workStartDateArray, workEndDateArray } = this.state;

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
            <input onChange={ this.changeSchoolName } value={ schoolName.text } type='text' id='schoolName' placeholder='ENTER EDUCATION INSTITUTE NAME' required/>
            <input onChange={ this.changeStudyTitle } value={ studyTitle.text } type='text' id='studyTitle' placeholder='ENTER TITLE OF STUDY' required />

            <div className='dateContainer'>
              <div className='startContainer'>
                <label for='eduStartDate'>EDUCATION START DATE</label>
                <input onChange={ this.changeEduStartDate } value={ eduStartDate.text } type='date' id='eduStartDate' name='eduStartDate' required />
              </div>
              <div className='endContainer'>
                <label for='eduEndDate'>EDUCATION END DATE</label>
                <input onChange={ this.changeEduEndDate } value={ eduEndDate.text } type='date' id='eduEndDate' name='eduEndDate' required />
              </div>
            </div>

            <input onChange={ this.changeCompanyName } value={ companyName.text } type='text' id='companyName' placeholder='ENTER COMPANY NAME' required />
            <input onChange={ this.changePositionTitle } value={ positionTitle.text } type='text' id='positionTitle' placeholder='ENTER POSIITON TITLE' required />
            <div className='dateContainer'>
              <div className='startContainer'>
                <label for='workStartDate'>JOB START DATE</label>
                <input onChange={ this.changeWorkStartDate } value={ workStartDate.text } type='date' id='workStartDate' name='workStartDate' required />
              </div>
              <div className='endContainer'>
                <label for='workEndDate'>JOB END DATE</label>
                <input onChange={ this.changeWorkEndDate } value={ workEndDate.text } type='date' id='workEndDate' name='workEndDate' required />
              </div>
            </div>
            <button type='submit'>SAVE CV</button>
          </form>
          <ExampleCV  fnArray={ firstNameArray } lnArray={ lastNameArray } eArray={ emailArray } pnArray={ phoneNumArray }
           snArray={ schoolNameArray } stArray={ studyTitleArray } esdArray={ eduStartDateArray } eedArray={ eduEndDateArray }
           cnArray={ companyNameArray } ptArray={ posiitonTitleArray } wsdArray={ workStartDateArray } wedArray={ workEndDateArray }
          />
        </div>
      </div>
    );
  }
}

export { App };