import { GetterTree } from 'vuex';
import { RootStateInterface } from '@/store/types';
import { AuthGettersEnum, AuthStateInterface } from '@/store/auth/types';

interface Getters<S = AuthStateInterface> {
  [AuthGettersEnum.isLoggedIn](state: S): boolean;
  [AuthGettersEnum.doesTokenExist](): boolean;
}

export const getters: GetterTree<AuthStateInterface, RootStateInterface> & Getters = {
  doesTokenExist() {
    return localStorage.getItem('user') !== null;
  },
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
};
