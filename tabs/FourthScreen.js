import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';

export default class FourthScreen extends React.Component{
  static navigationOptions = {
    tabBarLabel : 'Tab4'
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
        Este es el Tab 4
      </Text>
    </View>
  }
}
