import React, { useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Card, Title, TextInput, FAB } from 'react-native-paper'
import { connect } from 'react-redux'
import { signUpAction } from '../store/auth/auth-actions'


interface Props {
  navigation?: any,
  onSignUp: (auth: {email: string, password: string }) => void
}

const RegisterScreen = ({ navigation, onSignUp }: Props) => {
  const email = useInput('');
  const password = useInput('');



  React.useEffect(() => {
    navigation.setParams({
      name: 'Sign up',
      iconLeft: 'arrow-left',
      onLeftPress: ()=> navigation.pop(),
    })
  }, [])


  const onSignUpPress = () => {
    onSignUp({
      email: email.value,
      password: password.value,
    })
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
        />
        <TextInput
          onChangeText={password.onChange}
          accessibilityLabel='Password'
          placeholder='Password'
          keyboardType='default'
          value={password.value}
          label='Password'
          mode='outlined'
          underlineColor='red'
        />
        <FAB
          onPress={onSignUpPress}
          label='Sign up '
          animated
          style={styles.fab}
          testID='login_button'
          icon={'login-variant'}
        />
      </Card>
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
  },
  card: {
    width: Dimensions.get('window').width - 100,
    marginLeft: 25,
    marginTop: 200,
    padding: 10,
    borderRadius: 10,
    height: 260,
  },
  textField: {
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
  },
  fab: {
    margin: 16
  }
})
export default connect(null,{onSignUp: signUpAction })(RegisterScreen)