import { createStore } from 'vuex';
import { RootStateInterface } from '@/store/types';
import { authStorageStore } from '@/store/auth';

export default createStore<RootStateInterface>({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    authStorageStore,
  },
});
