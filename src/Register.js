import React, {useState} from 'react';
import './Register.css'
import './App.css';
import Register_header from './Register_header'
function RegistrationForm() {
    return(

    <div className="App">
	<header className="App-header">

      <div className="form">
          <Register_header>
          </Register_header>
          <div className="form-body">
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input className="form__input" type="email" id="email" placeholder="Email"/>
              </div>
              <div className="username">
                  <label className="form__label" for="username">Username </label>
                  <input className="form__input" type="text" id="username" placeholder="Username"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password" id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      </div>

	</header>
    </div>

    )
}
export default RegistrationForm;
