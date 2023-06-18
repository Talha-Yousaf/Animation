import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { NavigationProp } from '@react-navigation/native';
import Page from '../../components/Page';
import Animated ,{ useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { width } from '../../constants/Dimensions';
import AppColors from '../../constants/AppColors';
const words = ["What's","Up","Mobile","Apps","Devs"]
interface RouterProps{
  navigation:NavigationProp<any,any>
}
const InterpolateBasic:React.FC<RouterProps> = ({navigation})=> {
  const translateX = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((event)=>{
    translateX.value = event.contentOffset.x
  })
  return (
  <Animated.ScrollView
    pagingEnabled
    scrollEventThrottle={16}
    onScroll={scrollHandler}
    horizontal
    showsHorizontalScrollIndicator={false} 
    style={styles.scrollView}>
    {
      words.map((title,index)=>{
        return(
         <Page title={title} index={index} translateX={translateX}/ >       
        )
      })
    }
  </Animated.ScrollView>
  );
}
export default InterpolateBasic