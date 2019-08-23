import React from 'react';

import Greetings from '../greetings/greetings';

import '../style.css';

export default class SimpleForm extends React.Component {

  state ={
    firstName: '',
    firstNameError: '',
    lastName: '',
    lastNameError: '',
  };

  validateName = name => {
    const regex = /[A-Za-z]{3,}/;

    return !regex.test(name)
    ? "The name must contain at least three letters. Numbers and special characters are not allowed."
    : "";
  };

  onFirstNameBlur = () => {
  
    const { firstName } = this.state;
    const firstNameError = this.validateName( firstName );
    const { lastName } = this.state;
    const lastNameError = this.validateName( lastName );

    return this.setState({ firstNameError });
  };

  onFirstNameChange = evt =>
    this.setState({
      firstName: evt.target.value
    });

  onLastNameChange = ev => {
    this.setState({
      lastName: ev.target.value
    })
  }  

  render() {

    const { firstName, firstNameError, lastName, lastNameError } = this.state;

    return(
      <div className="form">
        <div className="input-group">
          <label>
            First name: 
            <input className="input"
                   type="text" 
                   name="firstName" 
                   onChange={this.onFirstNameChange}
                   onBlur={this.onFirstNameBlur} 
            />
            {firstNameError && <div className="error">{firstNameError}</div>}
          </label>
        </div>

        <div className="input-group">
          <label>
            Last name: 
            <input className="input"
                   type="text" 
                   name="lastName" 
                   onChange={this.onLastNameChange}
                   onBlur={this.onLastNameBlur} 
            />
            {lastNameError && <div className="error">{lastNameError}</div>}
          </label>
        </div>

        <Greetings firstName={firstName} lastName={lastName} />
      </div>
    );
  }
};

