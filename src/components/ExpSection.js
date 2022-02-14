import React, { Component } from 'react';
import './styles/ExpSection.css';

class ExpSection extends Component {
    render() {
        return (
            <div className='expSection-container'>
                <input
                 id='company-name'
                 className='companyName'
                 type='text'
                 placeholder='Enter Company Name'
                 required
                />
                <input
                 id='position-title'
                 className='positionTitle'
                 type='text'
                 placeholder='Enter Position Title'
                 required
                />
                <input
                 id='main-task'
                 className='mainTask'
                 type='text'
                 placeholder='Enter Main Tasks and Responsibilities'
                 required
                />
                <div className='expDate-container'>
                    <div className='expStart-container'>
                        <label for='expStart-date'>Start Date of Job</label>
                        <input
                         id='expStart-date'
                         name='expStart-date'
                         className='expStartDate'
                         type='date'
                         required
                        />
                    </div>
                    <div className='expEnd-container'>
                        <label for='expEnd-date'>End Date of Job</label>
                        <input
                         id='expEnd-date'
                         name='expEnd-date'
                         className='expEndDate'
                         type='date'
                         required
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export { ExpSection }