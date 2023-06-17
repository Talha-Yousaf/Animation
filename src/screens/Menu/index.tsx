import React from 'react'
import { View, Text,FlatList, ListRenderItem,Pressable } from 'react-native'
import styles from './styles';
import {NavigationProp} from '@react-navigation/native';
import {animationsData,Animation} from "../../utills/DummyData"
interface RouterProps {
    navigation : NavigationProp<any,any>
}
const Menu:React.FC<RouterProps> = ({navigation}) => {
  const renderItem:ListRenderItem<Animation> = ({item,index})=>{
    return(
        <Pressable onPress={()=>{
            switch(item.name){
                case "BASIC" :
                    navigation.navigate("Basic")    
                    break;
                case "PANGESTURE":
                    navigation.navigate("PanGesture")
                    break;
            }
        }} 
        style={styles.menuItemContainer}>
            <Text style={styles.animationNameText}>{item.name}</Text>
        </Pressable>
    )
  }
    return (
    <View style={styles.container}>
        <FlatList 
            data={animationsData}
            renderItem={renderItem}
            columnWrapperStyle={styles.columnWrapper}
            numColumns={3}
        />
    </View>
  )
}

export default Menu