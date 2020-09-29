import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  name: string;
  onPress: (props?: string) => void;
}

/**
* @author 
* @function Button
**/


const Button:FC<Props> = (props) => { 

const { container } = styles
 return(
  <View style={container}>
    <Text>Button</Text>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
 }
})
export default Button