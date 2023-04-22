import React, { useContext } from 'react';
import logo from './logo.svg';
import './HomeScreen.css';
import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext';

const HomeScreen = () => {
  const currentUser = useContext(UserContext);
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route, { state: { name: 'TEMP_USERNAME' } });
  };

  return (
    <div className="home-screen">
      <header className="home-screen-header">
        <div className="buttons-container">
          <button onClick={() => navigateTo('/Register')}>Register |</button>
          <button onClick={() => navigateTo('/Login')}>Login</button>
        </div>

        <img src={logo} className="home-screen-logo" alt="logo" />

        <p>Food Your Way</p>

        <button className="nav-button" onClick={() => navigateTo('/Dashboard')}>
          Dashboard
        </button>
        <button className="nav-button" onClick={() => navigateTo('/HATEOAS')}>
          HATEOAS Dropdown
        </button>
        <button className="nav-button" onClick={() => navigateTo('/AddRecipes')}>
          Add Recipes
        </button>
        <button className="nav-button" onClick={() => navigateTo('/SavedRecipes')}>
          Saved Recipes
        </button>
        <button className="nav-button" onClick={() => navigateTo('/SuggestedRecipes')}>
          Suggested Recipes
        </button>

        <p className="current-user">Current User: {currentUser}</p>
      </header>
    </div>
  );
};

export default HomeScreen;