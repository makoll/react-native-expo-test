import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends Component {
  state = {
    locationResult: null,
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(JSON.stringify(location));
    this.setState({ locationResult: JSON.stringify(location) });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles2.container}>React Native Test App!</Text>
        <Text>{this.state.locationResult}</Text>
        <WelcomeScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#ffffff',
    backgroundColor: '#05CCAD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles2 = StyleSheet.create({
  container: {
    color: '#ffffff',
  },
});
