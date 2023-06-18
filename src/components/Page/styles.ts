import {StyleSheet} from "react-native";
import {height,width} from "../../constants/Dimensions";
import AppColors from "../../constants/AppColors";

const styles = StyleSheet.create({
    container:{
        width:width(100),
        height:height(100),
        backgroundColor:AppColors.blue
    }
});

export default styles