import React from 'react';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

const styles = StyleSheet.create({

  icon: {
   width: 26,
   height: 26,
 },

  radius: {
    height: 50,
    width: 50,
    borderRadius: 50/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 112, 225, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(0, 112, 225, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },

  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default class FirstScreen extends React.Component{
  constructor() {
    super();
  }
  static navigationOptions = {
    // tabBarLabel : 'LOCATION',
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icons8-marker-64.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
  };

  render() {

    return (

      <MapView
        style={ styles.map }
        initialRegion={{
            latitude: -14.0783728,
            longitude: -75.7246265,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}>
          <MapView.Marker
            coordinate={{
              latitude: -14.0783728,
              longitude: -75.7246265,
            }}>
              <View style={styles.radius}>
                <View style={styles.marker} />
              </View>
          </MapView.Marker>
        </MapView>
    );
  }
}
