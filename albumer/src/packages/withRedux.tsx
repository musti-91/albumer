import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Store } from 'redux'


interface IArgs {
  store: Store;
  persistor?: any
  onBeforeLift?: () => void;
}

const withRedux = (Component: any, { store, persistor, onBeforeLift }: IArgs, Loader?: any) =>
{
  return (props: any) => {
    return (
      <Provider store={store}>
        <PersistGate loading={Loader} persistor={persistor} onBeforeLift={onBeforeLift}>
          <Component {...props} />
        </PersistGate>
      </Provider>
    );
  }
}
export default withRedux;