import React, { Component } from "react";

import { Header } from './Header';

import './styles/ExampleCV.css';

class ExampleCV extends Component {
    render() {
        return (
            <div className="cv-container">
                <Header text='PERSONAL INFORMATION'/>
                <div className="userName">
                    <p key={ this.props.fnArray[0].id }>{ this.props.fnArray[0].text }</p>
                    <p key={ this.props.lnArray[0].id }>{ this.props.lnArray[0].text }</p>
                </div>
                <p key={ this.props.eArray[0].id }>{ this.props.eArray[0].text }</p>
                <p key={ this.props.pnArray[0].id }>{ this.props.pnArray[0].text }</p>
            </div>
        )
    }
}

export { ExampleCV }