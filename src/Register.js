import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import './App.css';
import Register_header from './Register_header';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://food-your-way.herokuapp.com/users/register_user', formData);
      console.log(response);

      // Redirect to the homepage on successful registration
      navigate('/');
    } catch (error) {
      console.error('Registration error:', error);
      // Handle registration errors here
    }
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit} className="form">
          <Register_header />
          <div className="form-body">
            <div className="firstName">
              <label className="form__label" htmlFor="firstName">First Name </label>
              <input className="form__input" type="text" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
            </div>
            <div className="lastName">
              <label className="form__label" htmlFor="lastName">Last Name </label>
              <input className="form__input" type="text" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
            </div>
            <div className="email">
              <label className="form__label" htmlFor="email">Email </label>
              <input className="form__input" type="email" id="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="username">
              <label className="form__label" htmlFor="username">Username </label>
              <input className="form__input" type="text" id="username" placeholder="Username" value={formData.username} onChange={handleInputChange} />
            </div>
            <div className="password">
              <label className="form__label" htmlFor="password">Password </label>
              <input className="form__input" type="password" id="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
            </div>
            <div className="confirm-password">
              <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
              <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} />
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">Register</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default RegistrationForm;
