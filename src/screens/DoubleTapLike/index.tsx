import React, {useCallback, useEffect, useRef} from 'react';
import {View, Text,ViewStyle, StyleSheet, PanResponder,Image, ImageBackground, ImageProps} from 'react-native';
import {width, height} from '../../constants/Dimensions';
import Post from "../../assets/images/Post.jpg";
import Heart from "../../assets/images/Heart.png";
import styles from './styles';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { AnimateStyle, AnimatedStyleProp, useAnimatedStyle, useSharedValue, withDelay, withSpring } from 'react-native-reanimated';

// const SIZE = width(30);
// const CIRCLE = height(25)

type ContextType = {
  translateX: number;
  translateY: number;
};
const AnimatedImage = Animated.createAnimatedComponent(Image)
const PanGestureBasic = () => {
  const scale = useSharedValue(0)
  const doubleTapRef = useRef()

  const animatedImageStyle = useAnimatedStyle(()=>{
    return{
      transform:[{scale:Math.max(scale.value,0)}]
    }
  }) as AnimatedStyleProp<ImageProps>

  const onDoubleTap = useCallback(()=>{
    scale.value = withSpring(1,undefined,()=>{
      scale.value = withDelay(500,withSpring(0))
    })
  },[])
  return (
    <View style={styles.container}>
      <TapGestureHandler
      waitFor={doubleTapRef}
      onActivated={()=>{
        console.log("SingleTap");
        
      }}
      >
      <TapGestureHandler
      maxDelayMs={250}
      ref={doubleTapRef} 
      numberOfTaps={2}
      onActivated={onDoubleTap}>
        <Animated.View>
        <ImageBackground source={Post} style={styles.imageStyle}>
          <AnimatedImage 
          source={Heart} 
          style={[styles.heartStyle,animatedImageStyle]}
          />
        </ImageBackground>
        </Animated.View>
      </TapGestureHandler>
      </TapGestureHandler>
    </View>
  );
};

export default PanGestureBasic;
