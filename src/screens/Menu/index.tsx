import React from 'react';
import {View, Text, FlatList, ListRenderItem, Pressable} from 'react-native';
import styles from './styles';
import {NavigationProp} from '@react-navigation/native';
import {animationsData, Animation} from '../../utills/DummyData';
import {ScreenWrapper} from 'react-native-screen-wrapper';
interface RouterProps {
  navigation: NavigationProp<any, any>;
}
const Menu: React.FC<RouterProps> = ({navigation}) => {
  const renderItem: ListRenderItem<Animation> = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          switch (item.name) {
            case 'BASIC':
              navigation.navigate('Basic');
              break;
            case 'PANGESTURE':
              navigation.navigate('PanGesture');
              break;
            case 'INTERPOLATE':
              navigation.navigate('Interpolate');
              break;
            case "DARKMODE":
              navigation.navigate("DarkMode")
              break;
            case "PinchToZoom":
              navigation.navigate("PinchGestureHandler")
              break;
            case "InstaLike":
              navigation.navigate("DoubleTapLike")
              break;
          }
        }}
        style={styles.menuItemContainer}>
        <Text style={styles.animationNameText}>{item.name}</Text>
      </Pressable>
    );
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <FlatList
          data={animationsData}
          renderItem={renderItem}
          columnWrapperStyle={styles.columnWrapper}
          numColumns={3}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Menu;
