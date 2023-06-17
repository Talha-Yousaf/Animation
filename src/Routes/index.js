import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from "../screens/Menu";
import Basic from '../screens/Basic';
import PanGesture from "../screens/PanGesture"
import {useSelector} from 'react-redux';
// import Loader from '../components/Loader'
const Stack = createStackNavigator();
export default function Routes() {
    const isLogin = useSelector(state => state.Auth.isLogin)
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu" >
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Basic" component={Basic} />
          <Stack.Screen name="PanGesture" component={PanGesture} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

