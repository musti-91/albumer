import ApiService from './api/api-service';
import apiManager from './api/api-manager'


export let apiService: ApiService;
export function initServices() {
  apiService = new ApiService(apiManager)
}