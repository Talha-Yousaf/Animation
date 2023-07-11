import React, { useEffect } from 'react';
import { View,Text, StyleSheet, PanResponder,Image,ImageStyle, ViewStyle } from 'react-native';
import {width,height} from "../../constants/Dimensions"
import styles from './styles';
import Animated,{useSharedValue,useAnimatedStyle, withTiming, withSpring, withRepeat, useAnimatedGestureHandler, AnimatedStyleProp } from 'react-native-reanimated';
import { PinchGestureHandler, PinchGestureHandlerGestureEvent } from 'react-native-gesture-handler';

const IMAGE = "https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
const WIDTH:number = width(100);
const HEIGHT:number  = height(100)
const AnimatedImage = Animated.createAnimatedComponent(Image)


const Pinch = () => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0)
  const focalY = useSharedValue(0)
  const onGestureEvent  = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
    onActive : (event)=>{
      scale.value = event.scale
      focalX.value =  event.focalX
      focalY.value = event.focalY
    },
    onEnd:(event)=>{
      scale.value = withTiming(1) 
    }
  });
  const animatedStyle = useAnimatedStyle(()=>{
    return{
      transform:[
        {translateX:focalX.value},
        {translateY:focalY.value},
        {translateX:-WIDTH/2},
        {translateY:-HEIGHT/2},
        {scale:scale.value},
        {translateX:-focalX.value},
        {translateY:-focalY.value},
        {translateX:WIDTH/2},
        {translateY:HEIGHT/2},
      ]
    } as AnimatedStyleProp<ImageStyle>
  });
  const animatedFocalpointStyle = useAnimatedStyle(()=>{
    return{
      transform:[{translateX:focalX.value},{translateY:focalY.value}]
    }
  }) as AnimatedStyleProp<ViewStyle>
  return (
    <PinchGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={{flex:1}}>
      <AnimatedImage source={{uri:IMAGE}} style={[styles.imageStyle,animatedStyle]}/>
      <Animated.View style={[styles.focalPointView,animatedFocalpointStyle]}/>
      </Animated.View>
    </PinchGestureHandler>
  );
};

export default Pinch;

