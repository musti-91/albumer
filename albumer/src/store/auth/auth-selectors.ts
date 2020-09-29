import _get from 'lodash/get'
import IStore from '../store-type';

export interface IAuthState {
  error?: any
  user: any,
  [props: string]: any; // should extend firebase User interface
}

export const getAuthUser = (state: any): IAuthState['user'] =>
  _get(state, ['auth', 'user']);

export const getRefreshToken = (state: any): IAuthState['refreshToken'] =>
  _get(state, ['auth', 'refreshToken']);