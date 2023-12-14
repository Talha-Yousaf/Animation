import { View, Text } from 'react-native'
import React from 'react'
import {NavigationProp} from '@react-navigation/native';
interface RouterProps{
    navigation:NavigationProp<any,any>
}
const LocalStorage: React.FC<RouterProps> = () => {
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default LocalStorage