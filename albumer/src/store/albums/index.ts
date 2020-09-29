import { createSlice } from '@reduxjs/toolkit'
import { IAlbumsState } from './albums-selectors';
import { fetchTodayAlbums } from './albums-actions'



const initialState: IAlbumsState = {
  data: undefined,
  loading: false,
  error: null,
  liked: undefined,
  disliked: undefined,
}

const { reducer } = createSlice({
  initialState,
  name: 'albums',
  reducers: {},
  extraReducers: {
    // @ts-ignore
    [fetchTodayAlbums.fulfilled]: (state, { payload }) => ({
      ...state,
      data: payload,
    }),
    // @ts-ignore
    [fetchTodayAlbums.rejected]: (state, { payload }) => ({
      ...state,
      data: undefined,
      error: payload,
    }),
    // @ts-ignore
    [fetchTodayAlbums.pending]: (state) => ({
      ...state,
      loading: true,
      data: undefined,
      error: undefined,
    }),
  },
});
export default reducer