import { Module } from 'vuex';
import { RootStateInterface } from '@/store/types';
import { AuthStateInterface } from '@/store/auth/types';
import { actions } from '@/store/auth/actions';
import { getters } from '@/store/auth/getters';
import { mutations } from '@/store/auth/mutations';

export const state: AuthStateInterface = {
  isLoggedIn: false,
  token: null,
};

export const authStorageStore: Module<AuthStateInterface, RootStateInterface> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
