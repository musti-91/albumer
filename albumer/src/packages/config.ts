
import _merge from 'lodash/merge'
import { combineReducers, Store, ReducersMapObject } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk';



type Optional<T> = { [P in keyof T]?: T[P] }

interface IOptons {
  enableDevTools: boolean | string;
  persistConfig?: Optional<any>
  onBeforeLift?: (store: Store) => void;
}

const defaultOptions: IOptons = {
  enableDevTools: false,
  persistConfig: {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
    debug: true,
    whitelist: ['authReducer']
  }
}

const generateStore = (reducers: ReducersMapObject<{}>, options: IOptons) => {
  const mergeOptions: any = _merge(defaultOptions, options);

  const appReducers = combineReducers(reducers);

  const persistReducers = persistReducer(
    mergeOptions.persistConfig,
    appReducers
  );


  const store = configureStore({
    reducer: persistReducers,
    middleware: [...getDefaultMiddleware().concat([thunk])],
    // devtools: process.env.NODE_ENV !== 'production'
  })
  const persistor = persistStore(store);

  const onBeforeLift = () => mergeOptions.onBeforeLift(store);

  return {
    store,
    persistor,
    onBeforeLift,
  }
}
export default generateStore;