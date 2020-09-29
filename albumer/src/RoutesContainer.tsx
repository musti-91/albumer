import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { IAuthState } from './store/auth/auth-selectors';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ChatScreen from './screens/ChatScreen';
import IStore from './store/store-type';
import { IconButton } from 'react-native-paper';


interface Props {
  auth?: IAuthState,
}

/**
* @author
* @function RoutesContainer
**/

const Stack = createStackNavigator();

const authScreens = {
  SignIn: LoginScreen,
  SignUp: RegisterScreen,
  // forgot: ForgotPassword
};
const rootScreens = {
  Home: HomeScreen,
  Profile: ProfileScreen,
  Chat: ChatScreen,
};
const RoutesContainer = ({ auth }: Props) => {
  if (auth && auth.error) {
    return (
      <View style={styles.container}>
        <Text>{auth.error.toString()}</Text>
      </View>
    );
  }

  const options = (options: any) => {
    return {
      headerStyle: {
        backgroundColor: '#A38AEE',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {},
    };
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Object.entries({
          ...(auth && auth.user ? rootScreens : authScreens),
        }).map(([name, component]) => (
          <Stack.Screen
            name={name}
            component={component}
            key={`${name}-screen`}
            options={options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const mapStateToProps = (state: IStore) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(RoutesContainer)