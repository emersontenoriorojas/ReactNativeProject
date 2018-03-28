import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Home from './Home';

class GMapDemo extends Component {
  render() {
    return (
      <Home></Home>
    );
  }
}

AppRegistry.registerComponent('MyFirstDemoApp', () => GMapDemo);
