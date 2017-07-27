/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './app'

const store = configureStore()

const AwesomeProjectApp = () => (
  <Provider store = {store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProjectApp);
