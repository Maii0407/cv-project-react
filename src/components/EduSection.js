import React, { Component } from 'react';
import './styles/EduSection.css';

class EduSection extends Component {
    render() {
        return (
            <div className='eduSection-container'>
                <input
                 id='school-name'
                 className='schoolName'
                 type='text'
                 placeholder='Enter Name of Education Institute'
                 required
                />
                <input
                 id='edu-title'
                 className='titleName'
                 type='text'
                 placeholder='Enter Title of Qualification Awarded'
                 required
                />
                <div className='eduDate-container'>
                    <div className='eduStart-container'>
                        <label for='eduStart-date'>Start Date of Education</label>
                        <input
                         id='eduStart-date'
                         className='eduStartDate'
                         name='eduStart-date'
                         type='date'
                         required
                        />
                    </div>
                    <div className='eduEnd-container'>
                        <label for='eduEnd-date'>End Date of Education</label>
                        <input
                         id='eduEnd-date'
                         className='eduEndDate'
                         name='eduEnd-date'
                         type='date'
                         required
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export { EduSection }