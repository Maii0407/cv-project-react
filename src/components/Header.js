import React, { Component } from "react";

import './styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <h1> {this.props.text} </h1>
            </div>
        );
    }
}

export { Header };