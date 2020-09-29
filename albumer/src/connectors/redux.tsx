import React from 'react'
import store from '../store'

import withRedux from '../packages/withRedux'
import { View, ActivityIndicator } from 'react-native';

export default function (BaseComponent: any) {
  return withRedux(
    BaseComponent,
    store
  );
}