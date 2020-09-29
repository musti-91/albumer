import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthState } from './auth-selectors'
import AsyncStorage from '@react-native-community/async-storage'

import { apiService } from '../../services'

interface ThunkArgs {
  email: string;
  password: string;
}


export const signUpAction = createAsyncThunk<IAuthState, ThunkArgs>(
  'auth/signup_action_email_password',
  async ({ email, password }): Promise<any> => {
    return apiService.signUp(email, password)
      .then(response => {
        apiService.createUserEntity(response.user);
        return response;
      })
      .catch(error => error)
  }
);

export const signInAction = createAsyncThunk<IAuthState, ThunkArgs>(
  'auth/signin_action_email_password',
  async ({ email, password }): Promise<any> => {
    return apiService.signIn(email, password)
      .then(response => response)
      .catch(error=> error)
  }
);

export const signOutAction = createAsyncThunk(
  'auth/signout-action',
  async (): Promise<any> => {
    await apiService.signOut()
    await AsyncStorage.clear();
    return Promise.resolve();
  },
);