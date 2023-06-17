import {StyleSheet} from 'react-native';
import AppColors from '../../constants/AppColors';
import {width,height} from "../../constants/Dimensions"
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:AppColors.white,
  justifyContent:"center",
  alignItems:"center",
},
square:{
  width:width(20),
  height:width(20),
  borderRadius:width(3),
  backgroundColor:AppColors.blue50
},
circle:{
  width:height(40),
  height:height(40),
  borderRadius:height(40)/2,
  borderWidth:width(1),
  alignItems:"center",
  justifyContent:"center",
  borderColor:AppColors.blue50
}
});
export default styles;
