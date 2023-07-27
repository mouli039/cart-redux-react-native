import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import IIcon from 'react-native-vector-icons/Ionicons';
import Wedding from './Wedding';
import Decor from './Decor';
import Gift from './Gift';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tab = createMaterialTopTabNavigator();

export class Home extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.topText}>FLORIST</Text>
          <View style={styles.comment}>
            <Text style={styles.greetText}>Welcome!</Text>
            <IIcon name="person" size={hp('3')} color="black" />
          </View>
        </View>
        <Tab.Navigator
          backBehavior="initialRoute"
          initialRouteName="Wedding"
          screenOptions={{
            tabBarPressColor: '#9682B6',
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: '#2E2D2D',
            tabBarLabelStyle: {
              ...styles.label,
            },
            tabBarStyle: {
              ...styles.barStyles,
            },
            tabBarIndicatorStyle: {
              ...styles.indicatorStyle,
            },
          }}>
          <Tab.Screen
            name="Wedding"
            component={Wedding}
            options={{tabBarLabel: 'Wedding'}}
          />
          <Tab.Screen
            name="Decor"
            component={Decor}
            options={{tabBarLabel: 'Decor'}}
          />
          <Tab.Screen
            name="Gift"
            component={Gift}
            options={{tabBarLabel: 'Gift'}}
          />
        </Tab.Navigator>
      </>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
  },
  comment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    alignItems:'center'
  },
  topNavigation: {
    borderRadius: 30,
    backgroundColor: '#F4F4F4',
  },
  topText: {
    textAlign: 'center',
    paddingVertical: '3%',
    fontSize: wp('4'),
    letterSpacing: wp('1'),
    color: 'black',
    fontWeight: '600',
  },
  greetText: {
    fontSize: hp('3.25'),
    letterSpacing: wp('0.3'),
    color: 'black',
    fontWeight: '500',
  },
  label: {
    fontSize: hp('1.7%'),
    borderRightWidth: 1,
    // width: wp('30%'),
    // height:hp('2.5'),
    borderColor: '#2123',
    alignItems:'center',
    justifyContent:'center',
    height:hp('6'),
    width:wp('90')

  },
  barStyles: {
    borderRadius: hp('1.3%'),
    marginTop: hp('2%'),
    marginHorizontal: hp('2%'),
    backgroundColor: '#c3c4c7',
    height:hp('6'),
    width:wp('90')
  },
  indicatorStyle: {
    height: hp('6%'),
    backgroundColor: '#9682B6',
    borderRadius: hp('1.2%'),
  },
});
