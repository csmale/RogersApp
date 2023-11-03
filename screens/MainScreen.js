import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContext from '../components/AppContext.js';
import { useContext } from 'react';
import MyButton from '../components/MyButton.js';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
/*
import GetLocation, {
  Location,
  LocationErrorCode,
  isLocationError,
} from 'react-native-get-location';
*/

/*
Map
Zoom in
Zoom out
Centre on current location
Destination: Link to choose destination
Vehicle: Link to select vehicle profile
Settings: Link to edit user profile
*/
export default function MainScreen(props) {
  const myContext = useContext(AppContext);
  /*
  if (myContext.SearchLat == 0.0) {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
      rationale: {
        title: 'Location permission',
        message: 'The app needs the permission to request your location.',
        buttonPositive: 'Ok',
      },
    })
      .then(location => {
        console.log(location);
        myContext.setSearchLat(location.latitude);
        myContext.setSearchLon(location.longitude);
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
        myContext.setSearchLat(0.0);
        myContext.setSearchLon(0.0);
      })
  }

        <View style={styles.mapbox}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: myContext.SearchLat,
            longitude: myContext.SearchLon,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
  */
  return (
    <View style={styles.container}>

      <Text>Welcome {myContext.UserName}</Text>
      <Text>Logged in as {myContext.UserLogin}</Text>
      <Text>{myContext.UserCompany}</Text>
      <Text>Lat: {myContext.SearchLat.toString()} Lon: {myContext.SearchLon.toString()}</Text>
      <MyButton caption='Destination' target='Search' {...props} />
      <MyButton caption='Vehicle' target='VehicleList' {...props} />
      <MyButton caption='Settings' target='Settings' {...props} />
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
  mapbox: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});