import { AxiosInstance } from 'axios';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import * as firebase from '@react-native-firebase/app'
import config from '../../config'

export default class ApiService {
  private api: AxiosInstance;
  private collectionRef: any;

  constructor(api: AxiosInstance) {
    this.collectionRef = firestore().collection('albumer');
    this.api = api;
  }

  // method to fetch
  // Todo implement Auth
  signUp = async (email: string, password: string): Promise<any> => {
    // firebase get auth
    return await auth().createUserWithEmailAndPassword(email, password)
  };

  signIn = async (email: string, password: string): Promise<any> => {
    // firebase get auth
    return await auth().signInWithEmailAndPassword(email, password)
  };

  signOut = async (): Promise<void> => {
    await auth().signOut();
  }

  async fetchAlbums(userId: string): Promise<any>{
    return await this.api.get(`https://jsonplaceholder.typicode.com/albums`);
  }

  async fetchAvatars(captcha: string): Promise<any>{
    return await this.api.get(`${config.ADORABLE_API_BASE}/${captcha}`);
  }

  async createUserEntity(user: firebase.User) {
    return await this.collectionRef.doc(user.uid).save({...user })
  }
}
