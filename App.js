/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {StyleSheet} from 'react-native';
import * as React from 'react';
import MainHeader from './src/Header/MainHeader';
import Footer from './src/Footer/Footer'
import Products from './src/Screens/Products';
import SingleProduct from './src/Screens/SingleProduct';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App  = () => {

  return (
    <NavigationContainer style={styles.sectionContainer}>
          <MainHeader/>
          <Stack.Navigator>
              <Stack.Screen name="Products" component={Products}/>
              <Stack.Screen name="Single-product" component={SingleProduct}/>
          </Stack.Navigator>
          <Footer />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor:'#EFF3F6',
    flex:1,
    paddingBottom:35
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
