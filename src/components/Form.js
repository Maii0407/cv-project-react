import React, { Component } from 'react';
import { GenSection } from './GenSection';

class Form extends Component {
    render() {
        return(
            <div className='form-container'>
                <form>
                    <GenSection />
                </form>
            </div>
        );
    }
}

export { Form };