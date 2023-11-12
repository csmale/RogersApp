import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContext from '../components/AppContext.js';
import { useState, useContext } from 'react';
import MyButton from '../components/MyButton.js';
import MyInput from '../components/MyInput.js';

export default function SearchScreen(props) {
  const myContext = useContext(AppContext);
  const [SearchPostcode, setSearchPostcode] = useState(myContext.SearchPostcode);

  return (
    <View style={styles.container}>
      <Text>Destination search screen for {myContext.UserName}</Text>
      <Text>{myContext.UserCompany}</Text>
      <MyInput label='Postcode:' placeholder='AA1 9ZZ' value={SearchPostcode} onChangeText={setSearchPostcode}></MyInput>
      <MyInput label='Company:' placeholder='' value={myContext.SearchCompany} onChangeText={myContext.setSearchCompany}></MyInput>
      <MyInput label='Site:' placeholder='' value={myContext.SearchSite} onChangeText={myContext.setSearchSite}></MyInput>
      <MyInput label='Unit:' placeholder='' value={myContext.SearchUnit} onChangeText={myContext.setSearchUnit}></MyInput>
      <MyButton caption="Search" onPress={()=>props.navigation.navigate('Results')} {...props} />
      <MyButton caption="Back" onPress={()=>props.navigation.navigate('Main')} {...props} />
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