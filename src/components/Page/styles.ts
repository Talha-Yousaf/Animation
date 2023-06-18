import {StyleSheet} from 'react-native';
import {height, width} from '../../constants/Dimensions';
import AppColors from '../../constants/AppColors';

const styles = StyleSheet.create({
  container: {
    width: width(100),
    height: height(100),
    justifyContent:"center",
    alignItems:"center",
  },
  square: {
    width: width(70),
    height: width(70),
    backgroundColor: AppColors.blue50,
  },
  animatedTextContainer:{
    position:"absolute"
  },
  titleText:{
    fontSize:width(15),
    fontWeight:"700",
    color:AppColors.white,
    textTransform:"uppercase",
  },
});

export default styles;
