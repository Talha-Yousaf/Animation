import React from 'react';
import { Text, View,FlatList,
  Pressable,
  ActivityIndicator, } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { login } from '../../Redux/Actions/Auth';
import { setLoaderVisible } from '../../Redux/Actions/Config';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import AntDesign from "react-native-vector-icons/AntDesign";
import {width} from "react-native-dimension";
import cities from "../../utills/Data"
export default function Dashboard(props) {
 
  return (
    <ScreenWrapper statusBarColor={AppColors.white} barStyle='dark-content'>
      <View style={styles.mainViewContainer}>
        <Text> Login</Text>
      <Text>Here</Text>
      <View></View>
      </View>
    </ScreenWrapper>
  );
}
