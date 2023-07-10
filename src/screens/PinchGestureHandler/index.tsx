import React, { useEffect } from 'react';
import { View,Text, StyleSheet, PanResponder } from 'react-native';
import {width,height} from "../../constants/Dimensions"
import styles from './styles';
import Animated,{ useSharedValue,useAnimatedStyle, withTiming, withSpring, withRepeat } from 'react-native-reanimated';

const PinchGestureHandler = () => {

  return (
    <View style={styles.container}>
      <Text>Pinch</Text>
    </View>
  );
};

export default PinchGestureHandler;
