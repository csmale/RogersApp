import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import MainScreen from './screens/MainScreen';
import SettingsScreen from './screens/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import AppContext from './components/AppContext';
import VehicleListScreen from './screens/VehicleListScreen';
import SignupScreen from './screens/SignupScreen';
import SearchScreen from './screens/SearchScreen';
import ResultsScreen from './screens/ResultsScreen';
import DestDetailsScreen from './screens/DestDetailsScreen';
import EditDestScreen from './screens/EditDestScreen';
import NavigateScreen from './screens/NavigateScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [UserID, setUserID] = useState('user0');
  const [UserName, setUserName] = useState('Colin Smale');
  const [UserLogin, setUserLogin] = useState('colin.smale@xs4all.nl');
  const [UserCompany, setUserCompany] = useState("Smale's Wheels");
  const [SearchLat, setSearchLat] = useState(0.0);
  const [SearchLon, setSearchLon] = useState(0.0);
  const [SearchPostcode, setSearchPostcode] = useState('');
  const [SearchCompany, setSearchCompany] = useState('');
  const [SearchSite, setSearchSite] = useState('');
  const [SearchUnit, setSearchUnit] = useState('');
  const [SelectedId, setSelectedId] = useState(null);
  const [SelectedLat, setSelectedLat] = useState(0.0);
  const [SelectedLon, setSelectedLon] = useState(0.0);
  const [SelectedPostcode, setSelectedPostcode] = useState('');
  const [SelectedCompany, setSelectedCompany] = useState('');
  const [SelectedSite, setSelectedSite] = useState('');
  const [SelectedUnit, setSelectedUnit] = useState('');
  const userSettings = {
    UserID, setUserID,
    UserName, setUserName,
    UserLogin, setUserLogin,
    UserCompany, setUserCompany,
    SearchLat, setSearchLat,
    SearchLon, setSearchLon,
    SearchPostcode, setSearchPostcode,
    SearchCompany, setSearchCompany,
    SearchSite, setSearchSite,
    SearchUnit, setSearchUnit,
    SelectedId, setSelectedId,
    SelectedLat, setSelectedLat,
    SelectedLon, setSelectedLon,
    SelectedPostcode, setSelectedPostcode,
    SelectedCompany, setSelectedCompany,
    SelectedSite, setSelectedSite,
    SelectedUnit, setSelectedUnit,
  };
  /* </AppContext.Provider>  */
  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Start' ///the name of the initial screen
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen name="Start" component={StartScreen} />
          <Tab.Screen name="Main" component={MainScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="VehicleList" component={VehicleListScreen} />
          <Tab.Screen name="Signup" component={SignupScreen} />
          <Tab.Screen name="Results" component={ResultsScreen} />
          <Tab.Screen name="DestDetails" component={DestDetailsScreen} />
          <Tab.Screen name="EditDest" component={EditDestScreen} />
          <Tab.Screen name="Navigate" component={NavigateScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
