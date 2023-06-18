import React, {useEffect} from 'react';
import {View, Text,ViewStyle, StyleSheet, PanResponder} from 'react-native';
import {width, height} from '../../constants/Dimensions';
import styles from './styles';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
  AnimatedStyleProp
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
const SIZE = width(30);
const CIRCLE = height(25)

type ContextType = {
  translateX: number;
  translateY: number;
};
const PanGestureBasic = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      const distance = Math.sqrt(translateX.value**2 + translateY.value**2)
      if(distance < CIRCLE ){
        translateX.value = withSpring(0);
        translateY.value = withSpring(0)
      }
    },
  });
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    } as AnimatedStyleProp<ViewStyle>
  });
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.square, animatedStyles]} />
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default PanGestureBasic;
