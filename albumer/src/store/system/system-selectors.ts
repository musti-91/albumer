import _get from 'lodash/get'
import IStore from '../store-type'


export interface ISystemState {
  ready: boolean;
  booting: boolean
  error?: any
}

export const isSystemBooting = (state: IStore): ISystemState['booting'] => _get(state, ['system', 'booting']);

export const isSystemReady = (state: IStore): ISystemState['ready'] =>
  _get(state, ['system', 'ready']);

export const isSystemFailed = (state: IStore): ISystemState['error'] =>
  _get(state, ['system', 'error']);