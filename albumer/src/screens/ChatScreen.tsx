import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  navigation?: any,
}

/**
* @author
* @function ChatScreen
**/


const ChatScreen: FC<Props> = ({ navigation }) => {

    React.useEffect(() => {
      navigation.setParams({
        name: `Match`,
        iconLeft: 'arrow-left-circle',
        onLeftPress: () => navigation.pop(),
      });
    }, []);

const { container } = styles
 return(
  <View style={container}>
    <Text>ChatScreen</Text>
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
export default ChatScreen