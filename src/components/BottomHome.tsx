import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cart from './Cart';
import Home from './Home';
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import NavigationforProduct from './NavigationforProduct';
import Transections from './Transections';

const Tab = createBottomTabNavigator();

class BottomHome extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#4B194F',
          tabBarStyle: {
            paddingBottom: 10,
            height: 70,
            justifyContent: 'center',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MCIIcon name="home" size={40} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Catelog"
          component={NavigationforProduct}
          options={{
            tabBarIcon: ({color, size}) => (
              <IIcon name="book" size={35} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Transections"
          component={Transections}
          options={{
            tabBarIcon: ({color, size}) => (
              <MCIIcon name="chat" size={35} color={color} />
            ),
            headerShown: true,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({color, size}) => (
              <IIcon name="cart" size={35} color={color} />
            ),
            headerShown: true,
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomHome;
