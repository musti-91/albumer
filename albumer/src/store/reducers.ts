import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

import systemReducer from './system'
import authReducer from './auth'
import albumsReducer from './albums'
// import matcherReducer from './matcherReducer'


export const reducers = {
  system: systemReducer,
  auth: persistReducer({ key: 'authReducer', storage: AsyncStorage }, authReducer),
  albums: albumsReducer,
}