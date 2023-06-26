import { StyleSheet } from 'react-native';
import AppColors from '../../constants/AppColors';
import { width } from '../../constants/Dimensions';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },
});
export const COLORS = {
  light:{
    backgroundColor:"#F8F8F8",
    circle:"#FFF",
    text:"#1E1E1E"
  },
  dark:{
    backgroundColor:"#1E1E1E",
    circle:"#252525",
    text:"#F8F8F8"
  },
}
export const SWITCHTRACKCOLOR = {
  true:'rgba(256,0,256,0.2)',
  false:'rgba(0,0,0,0.1)'
}
export default styles;
