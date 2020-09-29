import { ISystemState } from './system/system-selectors';
import { IAuthState } from './auth/auth-selectors';
import { IAlbumsState } from './albums/albums-selectors';

export default interface IStore {
  auth: IAuthState;
  system: ISystemState;
  albums: IAlbumsState
}
