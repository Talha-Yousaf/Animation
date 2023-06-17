import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {width,height} from "react-native-dimension"
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:AppColors.white,
  justifyContent:"center",
  alignItems:"center",
},
animatedViewStyle:{
    width:width(30),
    height:width(30),
    backgroundColor:AppColors.blue
}
});
export default styles;
