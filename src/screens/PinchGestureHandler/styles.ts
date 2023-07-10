import {StyleSheet} from 'react-native';
import AppColors from '../../constants/AppColors';
import {width,height} from "../../constants/Dimensions";
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
},
imageStyle:{
  flex:1,
},
focalPointView:{
  ...StyleSheet.absoluteFillObject,
  backgroundColor:AppColors.blue,
  width:width(2),
  height:width(2),
  borderRadius:width(2)/2,
}
});
export default styles;
