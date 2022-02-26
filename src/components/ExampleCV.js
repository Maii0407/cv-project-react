import React from 'react';

import { Header } from './Header';

import './styles/ExampleCV.css';

const ExampleCV = ( props ) => {
  return (
    <div className='cv-container'>
      <Header text='PERSONAL INFORMATION'/>
      <div className='userName'>
        <p>{ props.firstName }</p>
        <p>{ props.lastName }</p>
      </div>
    </div>
  )
};

export { ExampleCV }

/*
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
                <Header text='EDUCATION INFORMATION'/>
                <p key={ this.props.snArray[0].id }>{ this.props.snArray[0].text }</p>
                <p key={ this.props.stArray[0].id }>{ this.props.stArray[0].text }</p>
                <div className="dates">
                    <p key={ this.props.esdArray[0].id }>From: { this.props.esdArray[0].text }</p>
                    <p key={ this.props.eedArray[0].id }>To: { this.props.eedArray[0].text }</p>
                </div>
                <Header text='PROFESSIONAL EXPERINCE INFORMATION'/>
                <p key={ this.props.cnArray[0].id }>{ this.props.cnArray[0].text }</p>
                <p key={ this.props.ptArray[0].id }>{ this.props.ptArray[0].text }</p>
                <div className="dates">
                    <p key={ this.props.wsdArray[0].id }>From: { this.props.wsdArray[0].text }</p>
                    <p key={ this.props.wedArray[0].id }>To: { this.props.wedArray[0].text }</p>
                </div>
            </div>
        )
    }
}
*/