import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard'
import Register from './Register'
import SearchRecipes from './SearchRecipes'
import AddRecipes from './AddRecipes'
import SavedRecipes from './SavedRecipes'
import SuggestedRecipes from './SuggestedRecipes'
import Register_header from './Register_header'

import Preferences from './Preferences'
import HomeScreen from './HomeScreen'


import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Page() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Search Recipes" component={SearchRecipes} />
        <Stack.Screen name="Add Recipes" component={AddRecipes} />
        <Stack.Screen name="Saved Recipes" component={SavedRecipes} />
        <Stack.Screen name="Suggested Recipes" component={SuggestedRecipes} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const DashboardScreen = ({navigation, route}) => {
  return <Text> Dashboard screen! {route.params.name}'s profile</Text>;
};

export default App;
