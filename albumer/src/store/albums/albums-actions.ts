import { createAsyncThunk } from '@reduxjs/toolkit'

import { IAlbumsState } from './albums-selectors'
import { apiService } from '../../services'
import storeConfig from '../index'
import { getAuthUser } from '../auth/auth-selectors'


interface IResAlbum {
  title: string;
  id: string;
  userId: string;
}

export const fetchTodayAlbums = createAsyncThunk<IAlbumsState>(
  'albums/fetch_albums',
  async (): Promise<IAlbumsState> => {
    const state = storeConfig.store.getState();
    const user = getAuthUser(state);
    const res = await apiService.fetchAlbums(user.uid);
    return res.data.map((album: IResAlbum) => ({
        albumUri: `https://api.adorable.io/avatars/300/${album.id}`, // Todo env variable
        uid: album.id,
        key: `album-${album.id}`,
        name: album.title,
        userId: album.userId,
        info: 0,
        photos: [],
      }));
  }
);
