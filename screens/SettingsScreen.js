import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContext from '../components/AppContext.js';
import { useContext } from 'react';
import MyButton from '../components/MyButton.js';

export default function SettingsScreen(props) {
  const myContext = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text>Setting for {myContext.UserName}</Text>
      <Text>{myContext.UserCompany}</Text>
      <MyButton caption="Done" onPress={()=>props.navigation.navigate('Main')} {...props} />
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