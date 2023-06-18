import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
interface PageProps{
    title:string,
    index:number
}
const Page:React.FC<PageProps> = ({title,index}) => {
  return (
    <View style={[styles.container,{backgroundColor:`rgba(0,0,256,0.${index+2})`}]} key={index.toString()}/>
  )
}

export default Page