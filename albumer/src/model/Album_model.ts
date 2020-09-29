

interface EmebbedTypes {
  uid?: string;
  userId: string;
}
export interface Album extends EmebbedTypes {
  albumUri: string;
  key: string;
  name: string;
  title?: string;
}