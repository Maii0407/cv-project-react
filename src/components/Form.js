import React, { Component } from 'react';
import { GenSection } from './GenSection';
import { Header } from './Header';
import { EduSection } from './EduSection';
import { ExpSection } from './ExpSection';

class Form extends Component {
    render() {
        return(
            <div className='form-container'>
                <form>
                    <div className='genSection-wrapper'>
                        <Header text='GENERAL INFORMATION'/>
                        <GenSection/>
                    </div>
                    <div className='eduSection-wrapper'>
                        <Header text='EDUCATION INFORMATION'/>
                        <EduSection/>
                    </div>
                    <div>
                        <button type='button'>+ Additional Education</button>
                    </div>
                    <div className='expSection-wrapper'>
                        <Header text='PROFESSIONAL EXPERIENCE INFORMATION'/>
                        <ExpSection/>
                    </div>
                    <div>
                        <button type='button'>+ Professional Experience</button>
                    </div>
                    <div>
                        <button type='submit'>Generate CV</button>
                    </div>
                </form>
            </div>
        );
    }
}

export { Form };