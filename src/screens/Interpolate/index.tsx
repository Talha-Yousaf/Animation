import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { NavigationProp } from '@react-navigation/native';
import Page from '../../components/Page';
import Animated ,{} from 'react-native-reanimated';
const words = ["Whats","Up","Mobile","Devs"]
interface RouterProps{
  navigation:NavigationProp<any,any>
}
const InterpolateBasic:React.FC<RouterProps> = ({navigation})=> {
  return (
  <Animated.ScrollView 
   horizontal
   showsHorizontalScrollIndicator={false} 
   style={styles.scrollView}>
    {
      words.map((title,index)=>{
        return(
         <Page title={title} index={index}/>
        )
      })
    }
    {/* <Animated.View style={styles.square}></Animated.View> */}
  </Animated.ScrollView>
  );
}
export default InterpolateBasic