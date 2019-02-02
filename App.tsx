/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const currentPlatform = Platform.select({
  ios: 'iOS',
  android: 'Android'
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Yo, I'm a react native app,</Text>
        <Text>fresh out of starter.</Text>
        <Text style={styles.currentPlatform}>{currentPlatform}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  currentPlatform: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
