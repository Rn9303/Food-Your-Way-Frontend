import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipes from './AddRecipes';
import SavedRecipes from './SavedRecipes';
import SuggestedRecipes from './SuggestedRecipes';
import HomeScreen from './HomeScreen';
import Dashboard from './Dashboard';
import Hateoas from './Hateoas';
import UserContext from './UserContext.js';
import Login from './Login.js'
import Register from './Register.js'
import Search from './Search.js'

const App = () => {
  const [user, setUser] = React.useState("admin");

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/AddRecipes" element={<AddRecipes />} />
          <Route path="/SavedRecipes" element={<SavedRecipes />} />
          <Route path="/SuggestedRecipes" element={<SuggestedRecipes />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/HATEOAS" element={<Hateoas />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Search" element={<Search />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;