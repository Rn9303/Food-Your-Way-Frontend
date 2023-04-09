import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Dashboard'
import Register from './Register'
import Login from './Login'
import SearchRecipes from './SearchRecipes'
import AddRecipes from './AddRecipes'
import SavedRecipes from './SavedRecipes'
import SuggestedRecipes from './SuggestedRecipes'
import Register_header from './Register_header'
import Hateoas from './Hateoas';

import Preferences from './Preferences'
import HomeScreen from './HomeScreen'

import UserContext from './UserContext.js'

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

const Stack = createNativeStackNavigator();

const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);
  
  React.useEffect(() => {
    setTimeout( () => {
       setIsLoading(!isLoading);
       setUser("admin");
    }, 500);
  }, []);

  return (
  <UserContext.Provider value={user}>
    <Router>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: user}}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Search Recipes" component={SearchRecipes} />
          <Stack.Screen name="Add Recipes" component={AddRecipes} />
          <Stack.Screen name="Saved Recipes" component={SavedRecipes} />
          <Stack.Screen name="Suggested Recipes" component={SuggestedRecipes} />
          <Stack.Screen name="HATEOAS" component={Hateoas} />

        </Stack.Navigator>
      </NavigationContainer>
    </Router>
   </UserContext.Provider>
  );
};

const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const DashboardScreen = ({navigation, route}) => {
  return <Text> Dashboard screen! {route.params.name}'s profile</Text>;
};

const WebRouteExample = () => {
  return <div>This is a web route example using React Router.</div>;
};

export default App;


// function Page() {
//   return (
//     <div className="wrapper">
//       <h1>Application</h1>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//           <Route path="/preferences">
//             <Preferences />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }