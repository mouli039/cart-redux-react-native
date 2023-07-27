import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomHome from './src/components/BottomHome';
import ContextProvider from './src/context/ContextProvider';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="BottomPage" component={BottomHome} />
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    );
  }
}

export default App;
