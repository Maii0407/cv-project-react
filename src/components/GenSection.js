import React, { Component } from 'react';
import { Header } from './Header';
import './styles/GenSection.css';

class GenSection extends Component {
    render() {
        return(
            <div className='genSection-container'>
                <Header text='GENERAL INFORMATION' />
                <div className='name-container'>
                    <input
                     id='first-name'
                     type='text'
                     placeholder='Enter First Name'
                     required
                    />
                    <input
                     id='last-name'
                     type='text'
                     placeholder='Enter Last Name'
                     required
                    />
                </div>
                <div className='contact-container'>
                    <input
                     id='email'
                     type='email'
                     placeholder='Enter E-Mail'
                     required
                    />
                    <input
                     id='phone'
                     type='tel'
                     placeholder='Enter Phone Number'
                     minLength='8'
                     maxLength='16'
                     required
                    />
                </div>
            </div>
        );
    }
}

export { GenSection };