import React, { useEffect } from 'react';
import { View,Text, StyleSheet, PanResponder } from 'react-native';
import {width,height} from "react-native-dimension"
import styles from './styles';
import Animated,{ useSharedValue,useAnimatedStyle, withTiming, withSpring, withRepeat } from 'react-native-reanimated';
const SIZE  = width(30)
const handleRotate = (progress)=>{
  'worklet';
  return `${progress.value*2*Math.PI}rad`
}

const Basic = () => {
  const progress = useSharedValue(0.5);
  const scale = useSharedValue(1);
  const animatedStyles = useAnimatedStyle(()=>{
    return{
      opacity:progress.value,
      borderRadius:progress.value*SIZE/2,
      transform:[
        {scale:scale.value},
        {rotate:handleRotate(progress)}
      
      ],
    }
  },[])
  useEffect(()=>{
    progress.value = withRepeat(withSpring(1),-1,true)
    scale.value = withRepeat(withSpring(0.5),-1,true)
  },[])
  return (
    <View style={styles.container}>
      <Animated.View
      style={[styles.animatedViewStyle,animatedStyles]}
      />
    </View>
  );
};

export default Basic;
