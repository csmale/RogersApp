import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContext from '../components/AppContext.js';
import { useContext } from 'react';
import MyButton from '../components/MyButton.js';
import MyInput from '../components/MyInput.js';

export default function SearchScreen(props) {
  const myContext = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text>Destination search screen for {myContext.UserName}</Text>
      <Text>{myContext.UserCompany}</Text>
      <MyInput label='Postcode:' placeholder='AA1 9ZZ' value={myContext.SearchPostcode}></MyInput>
      <MyInput label='Company:' placeholder='' value={myContext.SearchCompany}></MyInput>
      <MyInput label='Site:' placeholder='' value={myContext.SearchSite}></MyInput>
      <MyInput label='Unit:' placeholder='' value={myContext.SearchUnit}></MyInput>
      <MyButton caption="Search" target='Results' {...props} />
      <MyButton caption="Back" target='Main' {...props} />
    </View>
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