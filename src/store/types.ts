import { AuthStateInterface } from '@/store/auth/types';

export interface RootStateInterface {
  authStorageStore: AuthStateInterface,
}

export enum StoreModuleEnum {
  authStorageStore = 'authStorageStore',
}
