import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import { Card, TextInput, FAB } from 'react-native-paper'
import { connect } from 'react-redux'
import { signInAction } from '../store/auth/auth-actions'
import IStore from '../store/store-type';
import { IAuthState } from '../store/auth/auth-selectors';

interface Props {
  onLogin: (auth: { email: string, password: string }) => void;
  auth: IAuthState;
  navigation?: any
}

const LoginScreen = ({ onLogin, auth, navigation }:Props) => {
  const email = useInput('');
  const password = useInput('');


  const onLoginPressed = () => {
    onLogin({
      email: email.value,
      password: password.value,
    });
  }

  return (
    <View style={styles.container}>
      <Card testID='login' title='' subtitle='' style={styles.card}>
        <TextInput
          onChangeText={email.onChange}
          accessibilityLabel='Email or username'
          placeholder='Email or username'
          value={email.value}
          label='Email or username'
          mode='outlined'
          style={styles.textField}
          error={auth?.error}
        />
        <TextInput
          onChangeText={password.onChange}
          accessibilityLabel='Password'
          placeholder='Password'
          keyboardType='default'
          value={password.value}
          label='Password'
          style={styles.textField}
          mode='outlined'
          underlineColor='red'
        />

        {auth && auth.error && (
          <Text style={{ color: 'red' }}>{auth.error}</Text>
        )}
        <FAB
          onPress={onLoginPressed}
          label='Login'
          animated
          style={styles.fab}
          testID='login_button'
          icon={'login-variant'}
        />
      </Card>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginTop: 100,
        }}
      >
        <FAB
          onPress={() => navigation.navigate('SignUp')}
          label={'Register'}
          animated
          style={styles.fab2}
          color={'#fff'}
          icon={'account-arrow-right'}
        />
      </View>
    </View>
  );
}

const useInput = (val?: string) => {
  const [value, setValue] = useState(val ? val : '');
  return {
    value,
    onChange: (val: string) =>
      setValue(val),
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  card: {
    width: Dimensions.get('window').width - 100,
    marginLeft: 25,
    marginTop: 200,
    padding: 10,
    // height: (Dimensions.get('window').height / 3),
    borderRadius: 10,
    height: 300,
  },
  textField: {
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
  },
  fab: {
    margin: 16,
  },
  fab2: {
    backgroundColor: '#A38AEE',
  }
});
const mapStateToProps = (state: IStore) => ({
  auth: state.auth,
})
const mapDispatchToProps = {
  onLogin: signInAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)