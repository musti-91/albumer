import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from './auth-selectors'
import { signUpAction, signOutAction, signInAction } from './auth-actions'

const initialState: IAuthState = {
  user: undefined,
  error: null
}

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (state, { payload }) => ({
      ...state,
      user: payload.user,
    }),
    // refreshTokenStart: (state, _) => ({ ...state }),
    // refreshTokenSuccess: (state, _) => ({ ...state }),
    // refreshTokenFailure: (state, _) => ({ ...state }),
    clearTokens: (state) => ({
      ...state,
      user: undefined,
    }),
  },
  extraReducers: {
    //@ts-ignore
    [signUpAction.fulfilled]: (state, { payload }) => {
      if (payload.user) {
        return {
          ...state,
          user: payload.user,
        };
      } else {
        // const { error: { code } } = payload;
        // let error: any;
        // if (code == 'auth/email-address-in-use') {
        //   error = 'Email address already in use';
        // }
        // else if (code == 'auth/invalid-email') {
        //   error = 'Invalid email or Password';
        // } else {
        //   error = 'error occurred';
        // }
        return {
          ...state,
          error: payload.messsage,
          user: undefined,
        };
      }
    },
    // @ts-ignore
    [signUpAction.rejected]: (state) => {
      return { ...state, user: undefined };
    },
    //@ts-ignore
    [signInAction.fulfilled]: (state, { payload }) => {
      if (payload.user) {
        return {
          ...state,
          user: payload.user,
        };
      } else {
        // const { error: { code } } = payload;
        // let error: any;
        // if (code == 'auth/email-address-in-use') {
        //   error = 'Email address already in use';
        // }
        // else if (code == 'auth/invalid-email') {
        //   error = 'Invalid email or Password';
        // } else {
        //   error = 'error occurred';
        // }
        return {
          ...state,
          error: payload.messsage,
          user: undefined,
        };
      }
    },
    // @ts-ignore
    [signInAction.rejected]: (state) => {
      return { ...state, user: undefined };
    },
    // @ts-ignore
    [signOutAction.fulfilled]: (state) => ({
      ...state,
      user: undefined,
      error: undefined,
    }),
    // @ts-ignore
    [signOutAction.rejected]: (state) => ({
      ...state,
    }),
  },
});

export const {
  setTokens,
  clearTokens,
} = actions;
export default reducer;