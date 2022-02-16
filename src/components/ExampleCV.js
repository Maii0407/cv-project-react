import React, { Component } from "react";

import { Header } from './Header';

import './styles/ExampleCV.css';

class ExampleCV extends Component {
    render() {
        return (
            <div className="cv-container">
                <Header text='PERSONAL INFORMATION'/>
                <div className="userName">
                    <p>First Name</p>
                    <p>Last Name</p>
                </div>
                <p>email@rocketmail.com</p>
                <p>000 0000 0000</p>
            </div>
        )
    }
}

export { ExampleCV }