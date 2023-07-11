import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from "../screens/Menu";
import Basic from '../screens/Basic';
import PanGesture from "../screens/PanGesture";
import InterpolateBasic from '../screens/Interpolate';
import DarkMode from "../screens/DarkMode";
import PinchGestureHandler from "../screens/PinchGestureHandler";
import DoubleTapLike from "../screens/DoubleTapLike";
import {useSelector} from 'react-redux';
// import Loader from '../components/Loader'
const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Menu" >
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Basic" component={Basic} />
          <Stack.Screen name="PanGesture" component={PanGesture} />
          <Stack.Screen name="Interpolate" component={InterpolateBasic} />
          <Stack.Screen name="DarkMode" component={DarkMode} />
          <Stack.Screen name="PinchGestureHandler" component={PinchGestureHandler} />
          <Stack.Screen name="DoubleTapLike" component={DoubleTapLike} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

