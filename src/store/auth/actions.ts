import { ActionContext, ActionTree } from 'vuex';
import { RootStateInterface } from '@/store/types';
import {
  AuthMutationEnum, AuthActionEnum, AuthStateInterface, LocalStorageInterface, UserInterface,
} from '@/store/auth/types';

interface Actions<S = AuthStateInterface, R = RootStateInterface> {
  [AuthActionEnum.LOGIN_USER]({ commit, dispatch }: ActionContext<S, R>, user: UserInterface): void;
  [AuthActionEnum.LOGOUT_USER]({ commit, dispatch }: ActionContext<S, R>): void;
  [AuthActionEnum.SET]({ commit }: ActionContext<S, R>, payload: LocalStorageInterface): void;
  [AuthActionEnum.GET]({ commit }: ActionContext<S, R>, payload: string): void;
  [AuthActionEnum.REMOVE]({ commit }: ActionContext<S, R>, payload: string): void;
}

export const actions: ActionTree<AuthStateInterface, RootStateInterface> & Actions = {
  [AuthActionEnum.LOGIN_USER]: async ({ commit, dispatch }, user) => {
    const localStorageUser: LocalStorageInterface = {
      key: 'user',
      value: true,
    };

    await dispatch(AuthActionEnum.SET, localStorageUser);
    commit(AuthMutationEnum.SET_LOGGED_IN, true);
  },
  [AuthActionEnum.LOGOUT_USER]: async ({ commit, dispatch }) => {
    await dispatch(AuthActionEnum.REMOVE, 'user');
    commit(AuthMutationEnum.SET_LOGGED_IN, false);
  },
  [AuthActionEnum.SET]: ({ commit }, payload) => {
    commit(AuthMutationEnum.SET_LOCAL_STORAGE, payload);
  },
  [AuthActionEnum.GET]: ({ commit }, payload) => {
    commit(AuthMutationEnum.GET_LOCAL_STORAGE, payload);
  },
  [AuthActionEnum.REMOVE]: ({ commit }, payload) => {
    commit(AuthMutationEnum.REMOVE_LOCAL_STORAGE, payload);
  },
};
