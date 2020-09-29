import { Album } from './../../model/Album_model';

export interface IAlbumsState {
  loading: boolean;
  data?: Album[],
  liked?: [],
  disliked?: [],
  error?: any
}