import { ISystemState } from './system-selectors'
import { createSlice } from '@reduxjs/toolkit'


const initialState: ISystemState = {
  booting: false,
  ready: false,
  error: undefined
}

const { actions, reducer } = createSlice({
  name: 'system',
  initialState,
  reducers: {
    systemStart: (state): any => ({ ...state, booting: true }),
    systemReady: (state):any=> ({...state, ready: true, booting: false}),
    systemFailure: (state, { payload }): any => ({ ...state, ready: false, booting: false, error: payload }),
    resetStore: (state) => ({
      ...state,
      error: undefined,
      ready: false,
      booting: false,
    })
  },
})

export const { systemFailure, systemReady, systemStart, resetStore } = actions
export default reducer;