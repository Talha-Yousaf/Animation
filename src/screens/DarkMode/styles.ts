import { StyleSheet } from 'react-native';
import AppColors from '../../constants/AppColors';
import { width,height } from '../../constants/Dimensions';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },
  circle:{
    width:width(70),
    height:width(70),
    borderRadius:width(70)/2,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#FFF",
    shadowOffset:{
      width:0,
      height:height(1),
    },
    shadowRadius:width(2),
    shadowOpacity:0.2,
    elevation:8,
  },
  text:{
    fontSize:width(15),
    letterSpacing:width(4),
    marginBottom:height(4),
    fontWeight:"700",
    color:"black",
    textTransform:"uppercase",
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
