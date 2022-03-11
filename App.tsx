
import React from 'react';
import { StyleSheet } from 'react-native';
import { Navigation } from './Navigation';
import {Provider}  from 'react-redux';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <Navigation>
    </Navigation>
    </Provider>
  )

}




const styles = StyleSheet.create({

});

export { App }