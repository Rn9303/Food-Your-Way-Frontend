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


import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

class HomeScreen extends Component {

  render() {
     
	return (
    <div className="App">
      <header className="App-header">
	
    	<View style={[{ width: "19%", marginTop: "-16%", alignSelf: 'flex-end', flexDirection: "row" }]}>
		<Button
  		onPress={() => this.props.navigation.navigate('Register', {name: 'TEMP_USERNAME'})}
  		title="Register"
  		accessibilityLabel="Register"/>
		<Button
  		onPress={() => this.props.navigation.navigate('Login', {name: 'TEMP_USERNAME'})}
  		title="Login"
  		accessibilityLabel="Login"/>
		</View>

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Food Your Way
        </p>

    <View style={[{ width: "40%", margin: 20 }]}>
		<Button
  		onPress={() => this.props.navigation.navigate('Dashboard', {name: 'TEMP_USERNAME'})}
  		title="Dashboard"
  		color="#50afff"
  		accessibilityLabel="Dashboard"/>
	</View>

	<View style={[{ width: "40%", margin: 20 }]}>
		<Button
  		onPress={() => this.props.navigation.navigate('Search Recipes', {name: 'TEMP_USERNAME'})}
  		title="Search Recipes"
  		color="#50afff"
  		accessibilityLabel="Search for recipes"/>
	</View> 

	<View style={[{ width: "40%", margin: 20 }]}>
		<Button
  		onPress={() => this.props.navigation.navigate('Add Recipes', {name: 'TEMP_USERNAME'})}
  		title="Add Recipes"
  		color="#50afff"
  		accessibilityLabel="Add new recipes"/>
	</View>

    <View style={[{ width: "40%", margin: 20 }]}>
		<Button
  		onPress={() => this.props.navigation.navigate('Saved Recipes', {name: 'TEMP_USERNAME'})}
  		title="Saved Recipes"
  		color="#50afff"
  		accessibilityLabel="Saved Recipes"/>
	</View>

	<View style={[{ width: "40%", margin: 20 }]}>
		<Button
  		onPress={() => this.props.navigation.navigate('Suggested Recipes', {name: 'TEMP_USERNAME'})}
  		title="Suggested Recipes"
  		color="#50afff"
  		accessibilityLabel="Suggested recipes based on search"/>
	</View>

      </header>
    </div>
  );

  }
	
}

export default HomeScreen;




  

