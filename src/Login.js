import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import './App.css';
// Import any other required components or styles
import UserContext from './UserContext';



function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://food-your-way.herokuapp.com/users/login', formData);
      console.log(response);

      // Redirect to the homepage on successful login
      navigate('/', {username: formData.username});
    } catch (error) {
      console.error('Login error:', error);
      // Handle login errors here
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit} className="form">
          {/* Add your login header component if needed */}
          <div className="form-body">
            <div className="username">
              <label className="form__label" htmlFor="username">Username </label>
              <input className="form__input" type="text" id="username" placeholder="Username" value={formData.username} onChange={handleInputChange} />
            </div>
            <div className="password">
              <label className="form__label" htmlFor="password">Password </label>
              <input className="form__input" type="password" id="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">Login</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default LoginForm;
