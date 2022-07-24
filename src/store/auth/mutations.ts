import { MutationTree } from 'vuex';
import { AuthStateInterface, LocalStorageInterface, AuthMutationEnum } from '@/store/auth/types';

interface Mutations<S = AuthStateInterface> {
  [AuthMutationEnum.SET_LOGGED_IN](state: S, isLoggedIn: boolean): void;
  [AuthMutationEnum.SET_LOCAL_STORAGE](state: S, payload: LocalStorageInterface): void;
  [AuthMutationEnum.GET_LOCAL_STORAGE](state: S, payload: string): void;
  [AuthMutationEnum.REMOVE_LOCAL_STORAGE](state: S, payload: string): void;
}

export const mutations: MutationTree<AuthStateInterface> & Mutations = {
  [AuthMutationEnum.SET_LOGGED_IN]: (state, isLoggedIn) => {
    state.isLoggedIn = isLoggedIn;
  },
  [AuthMutationEnum.SET_LOCAL_STORAGE]: (state, payload) => {
    const lsStringValue = payload.value.toString();
    localStorage.setItem(payload.key, lsStringValue);
    state.token = JSON.stringify(payload);
  },
  [AuthMutationEnum.GET_LOCAL_STORAGE]: (state, payload) => {
    localStorage.getItem(payload);
  },
  [AuthMutationEnum.REMOVE_LOCAL_STORAGE]: (state, payload) => {
    localStorage.removeItem(payload);
    state.token = null;
  },
};
