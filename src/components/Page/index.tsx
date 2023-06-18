import React from 'react'
import { View, Text, ViewStyle } from 'react-native'
import styles from './styles'
import Animated, { AnimatedStyleProp, Extrapolate, interpolate, useAnimatedStyle, withSpring } from 'react-native-reanimated'
import { height, width } from '../../constants/Dimensions'
const screenWidth:number = width(100);
const squareSize = width(70)
const SCREENHEIGHT = height(100)
interface PageProps{
    title:string,
    index:number,
    translateX:Animated.SharedValue<number>,
}
type TranslateStyle = {
  translateY :number
}
const Page:React.FC<PageProps> = ({title,index,translateX}) => {
  const inputRange = [(index-1)*screenWidth,index*screenWidth,(index+1)*screenWidth]
  const animatedStyles = useAnimatedStyle(()=>{ 
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0,1,0],
      Extrapolate.CLAMP
    )
    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0,squareSize/2,0],
      Extrapolate.CLAMP
    )
    return{
      borderRadius,
      transform: [
        {scale},
      ]
    } as AnimatedStyleProp<ViewStyle>
  });

  const animatedTextStyles = useAnimatedStyle(()=>{
    const opacity = interpolate(translateX.value,inputRange,[-2,1,-2],Extrapolate.CLAMP)
    const translateY = interpolate(translateX.value,inputRange,[SCREENHEIGHT/2,0,-SCREENHEIGHT/2],Extrapolate.CLAMP)
    return{
      opacity,
      transform:[{
        translateY
      }] 
    } as AnimatedStyleProp<ViewStyle>
  })
  return (
    <View style={[
      styles.container,
      {backgroundColor:`rgba(0,0,256,0.${index+2})`}
    ]} 
    key={index.toString()}
    >
       <Animated.View style={[styles.square,animatedStyles]} />
       <Animated.View style={[styles.animatedTextContainer,animatedTextStyles]}>
        <Text style={styles.titleText}>{title}</Text>
       </Animated.View>
    </View>
  )
}

export default Page