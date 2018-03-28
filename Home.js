
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  colors,
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import FirstScreen from './tabs/FirstScreen';
import SecondScreen from './tabs/SecondScreen';
import ThirthScreen from './tabs/ThirthScreen';
import FourthScreen from './tabs/FourthScreen';

var MainScreenNavigator = TabNavigator({
  Tab1: {screen: FirstScreen},
  Tab2: {screen : SecondScreen},
  Tab3: {screen: ThirthScreen},
  Tab4: {screen : FourthScreen}
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'white',
  		inactiveTintColor: 'lightgray',
      labelStyle: {
        fontSize: 12,
        padding: 10,
      },

      indicatorStyle: {
         backgroundColor: 'gray',
      },

      style: {
			backgroundColor: '#6160a0',
			borderTopWidth: 2,
			borderTopColor: 'white'
		  },
    }
}
);

MainScreenNavigator.navigationOptions = {
  title: 'TabExample'
};


export default MainScreenNavigator;
