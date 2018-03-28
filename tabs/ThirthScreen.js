import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';

export default class ThirthScreen extends React.Component{
  static navigationOptions = {
    tabBarLabel : 'Tab3'
  }
  render(){
    return <View style = {
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
    }>
      <Text  style = {{fontSize: 30}}>
        Este es el Tab 3
      </Text>
    </View>
  }
}
