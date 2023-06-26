import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';
import styles,{SWITCHTRACKCOLOR,COLORS} from './styles';
import { NavigationProp } from '@react-navigation/native';
import Page from '../../components/Page';
import Animated ,{ interpolateColor, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { width } from '../../constants/Dimensions';

interface RouterProps{
  navigation:NavigationProp<any,any>
}
type Theme = "light"|"dark"
const InterpolateBasic:React.FC<RouterProps> = ({navigation})=> {
  const [theme,setTheme] = useState<Theme>("light")
  const progress = useDerivedValue(()=>{
    return theme=="dark"?withTiming(1,{duration:500}):withTiming(0,{duration:500});
  },[theme])

  const animatedStyles = useAnimatedStyle(()=>{
    const backgroundColor = interpolateColor(progress.value,[0,1],[COLORS.light.backgroundColor,COLORS.dark.backgroundColor])
    return{
      backgroundColor
    }
  })
  
  return (
    <Animated.View style={[styles.mainViewContainer,animatedStyles]}>
      <Switch 
      value={theme==="dark"}
      onValueChange={(toggled)=>{
        setTheme(toggled?"dark":"light")
      }}
      trackColor={SWITCHTRACKCOLOR}
      thumbColor={"violet"}
      />
    </Animated.View>
  );
}
export default InterpolateBasic