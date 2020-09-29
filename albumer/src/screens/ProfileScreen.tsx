import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { clearTokens } from '../store/auth'
import { TouchableOpacity } from 'react-native';

interface Props {
  navigation?: any;
  onLogout: () => void;
}

/**
* @author
* @function ProfileScreen
**/


const ProfileScreen: FC<Props> = ({ navigation, onLogout }) => {
  React.useEffect(() => {
    navigation.setParams({
      name: `Match`,
      iconLeft: 'arrow-left-circle',
      onLeftPress: () => navigation.pop(),
    });
  }, []);

  const { container } = styles
  return (
    <View style={container}>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={() => onLogout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default connect(null, {
  onLogout: clearTokens,
})(ProfileScreen)