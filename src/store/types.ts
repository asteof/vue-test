import { AuthStateInterface } from '@/store/auth/types';
import { NewsStateInterface } from '@/store/news/types';

export interface RootStateInterface {
  authStore: AuthStateInterface,
  newsStore: NewsStateInterface,
}

export enum StoreModuleEnum {
  authStore = 'authStore',
  newsStore = 'newsStore',
}
