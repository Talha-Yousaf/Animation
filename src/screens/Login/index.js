import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, PanResponder, Animated } from 'react-native';

import {width,height} from "react-native-dimension"
const parentWidth = width(8) ;
const parentHeight = height(20);
const childSize = height(10);

const DragButton = () => {
  const pan = useRef(new Animated.ValueXY({ x: 0, y: parentHeight / 2})).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: (evt, gestureState) => {
        const newY = pan.y._offset + gestureState.dy;
        if (newY < -childSize / 2) {
          pan.setValue({ x: 0, y: -pan.y._offset - childSize / 2 });
        } else if (newY > parentHeight - childSize / 2) {
          pan.setValue({ x: 0, y: parentHeight - childSize / 2 - pan.y._offset });
        } else {
          pan.setValue({ x: 0, y: gestureState.dy });
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        pan.flattenOffset();
        if (pan.y._value !== parentHeight / 2 - childSize / 2) {
          Animated.spring(pan, {
            toValue: { x: 0, y: parentHeight / 2 - childSize / 2 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;
//gyjgiugi
  return (
    <View style={styles.container}>
      <Animated.View
        style={[{ transform: [{ translateY: pan.y }] }, styles.child]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width(8),
    height: height(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"blue"
  },
  child: {
    width: width(10),
    height: width(10),
    borderRadius: width(10) / 2,
    backgroundColor: 'red',
    alignSelf:"center"
    // position: 'absolute',
    // left: width(1),
  },
});

export default DragButton;
