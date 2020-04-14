import React from 'react';
import Routes from './routes';
import {View, StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </>
  );
}
