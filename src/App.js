import React, { Component } from "react";
import './App.css';
import { Header } from './components/Header';
import { Form } from './components/Form'

class App extends Component {
  render() {
    return (
      <div className='main-container' >
        <Header text='CV MAKER APP' />
        <Form />
      </div>
    );
  }
}

export { App }; 