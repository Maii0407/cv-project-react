import React, { Component } from "react";

import { Header } from './Header';

import './styles/ExampleCV.css';

class ExampleCV extends Component {
    render() {
        return (
            <div className="cv-container">
                <Header text='PERSONAL INFORMATION'/>
                <div className="userName">
                    <p>{ this.props.firstName }</p>
                    <p>{ this.props.lastName }</p>
                </div>
                <p>{ this.props.email }</p>
                <p>{ this.props.phoneNum }</p>
            </div>
        )
    }
}

export { ExampleCV }