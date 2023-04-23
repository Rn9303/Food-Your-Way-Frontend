import React, { useState } from 'react';
import axios from 'axios';
import CollapsibleItem from './CollapsibleItem';
import './Search.css';

const Search = () => {
  const [name, setName] = useState('');
  const [include, setInclude] = useState('');
  const [exclude, setExclude] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nameError, setNameError] = useState(false);

  const handleSearch = () => {
    if (!name) {
      setNameError(true);
      return;
    }

    setNameError(false);
    setIsLoading(true);

    setTimeout(() => {
      const searchString = `${name};:;${include ? include : ''}${include && exclude ? ';:;' : ''}${exclude ? exclude : ''}`;
      axios
        .get(`https://food-your-way.herokuapp.com/searchIncExc/${searchString}`)
        .then((response) => {
          setRecipes(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }, 200);
  };

  const handleReset = () => {
    setRecipes([]);
  };

  return (
  <div className="custom-search-container">
    <h1 className="title">Search For Recipes</h1>
    <div className="search-wrapper">
      <div className="search-section">
        <div className="input-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={nameError ? 'input-error' : ''}
          />
          {nameError && (
            <p className="error-message">Name cannot be left blank.</p>
          )}
          <input
            type="text"
            placeholder="Ingredients to include (comma-separated)"
            value={include}
            onChange={(e) => setInclude(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ingredients to exclude (comma-separated)"
            value={exclude}
            onChange={(e) => setExclude(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div className="output-container">
        {isLoading && (
          <div className="loading-container">
            <div className="loading-text">
              {Array.from('Loading...').map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </div>
          </div>
        )}
        {recipes.map((recipe, index) => (
          <CollapsibleItem key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default Search;