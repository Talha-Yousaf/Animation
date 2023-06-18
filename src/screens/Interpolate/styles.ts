import { StyleSheet } from 'react-native';
import AppColors from '../../constants/AppColors';
import { width } from '../../constants/Dimensions';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  square:{
    width:width(70),
    height:width(70),
    backgroundColor:"red"
  },
});
export default styles;
