import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import SingleProduct from './SingleProduct';
import Catalog from './Catalog';

const Stack = createStackNavigator();

export class NavigationforProduct extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TopNavigator" component={Catalog} />
        <Stack.Screen name="SingleProduct" component={SingleProduct} />
      </Stack.Navigator>
    );
  }
}

export default NavigationforProduct;
