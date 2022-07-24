import { createStore } from 'vuex';
import { RootStateInterface } from '@/store/types';
import { authStore } from '@/store/auth';
import { newsStore } from '@/store/news';

export default createStore<RootStateInterface>({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    authStore,
    newsStore,
  },
});
