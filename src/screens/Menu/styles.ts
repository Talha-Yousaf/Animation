import {StyleSheet} from "react-native";
import {width,height} from "../../constants/Dimensions";
import AppColors from "../../constants/AppColors";

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:width(4),
        marginLeft:width(1),
        backgroundColor:AppColors.white,
    },
    columnWrapper:{
        marginBottom:height(2),
    },
    menuItemContainer:{
        width:width(30),
        height:width(30),
        borderRadius:width(2),
        marginLeft:width(2),
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:AppColors.gray,
    },
    animationNameText:{
        fontSize:width(4),
        color:AppColors.white
    },
});
export default styles