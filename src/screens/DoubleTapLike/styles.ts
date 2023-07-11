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
imageStyle:{
    width:width(100),
    height:width(100),
    justifyContent:"center",
    alignItems:"center",
},
heartStyle:{
  resizeMode:"center",
  tintColor:AppColors.white,
  shadowOffset:{
    width:0,
    height:20,
  },
  shadowOpacity:0.3,
  shadowRadius:10,
},
});
export default styles;
