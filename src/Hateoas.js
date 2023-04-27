import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Hateoas.css';
import CollapsibleItem from './CollapsibleItem';

const Hateoas = () => {
  const [endpoints, setEndpoints] = useState({});
  const [selectedEndpoint, setSelectedEndpoint] = useState('');
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get('https://food-your-way.herokuapp.com/recipes/searchHateoas')
      .then(response => {
        setEndpoints(response.data.Choices);
      });
  }, []);

  const handleChange = (e) => {
    setSelectedEndpoint(e.target.value);
    if (e.target.value === '') {
      setOutput(null);
    }
  };

  useEffect(() => {
    if (selectedEndpoint) {
      setIsLoading(true);
      const endpoint = endpoints[selectedEndpoint];
      axios[endpoint.method](`https://food-your-way.herokuapp.com${endpoint.url}`)
        .then(response => {
          setOutput(response.data);
          setIsLoading(false);
        });
    }
  }, [selectedEndpoint, endpoints]);

  const renderOutput = () => {
    if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-text">
          {Array.from('Loading...').map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>
      </div>
    );
  }

    if (!output) return null;

    if (Array.isArray(output)) {
      return output.map((recipe, index) => <CollapsibleItem key={index} recipe={recipe} />);
    }

    if (typeof output === 'object') {
      return Object.entries(output).map(([key, recipe]) => (
        <CollapsibleItem key={key} recipe={recipe} />
      ));
    }

    return null;
  };

  return (
    <div className="container">
      <h1 className="title">HATEOAS Demo</h1>
      <select className="endpoint-select" value={selectedEndpoint} onChange={handleChange}>
        <option value="">Select an endpoint</option>
        {Object.entries(endpoints).map(([key, value]) => (
          <option key={key} value={key}>{value.text}</option>
        ))}
      </select>

      <div className="output-container">{renderOutput()}</div>
    </div>
  );
};

export default Hateoas;
