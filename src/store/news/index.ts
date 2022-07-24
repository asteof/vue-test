import { Module } from 'vuex';
import { RootStateInterface } from '@/store/types';
import { NewsStateInterface } from '@/store/news/types';
import { actions } from '@/store/news/actions';
import { getters } from '@/store/news/getters';
import { mutations } from '@/store/news/mutations';

export const state: NewsStateInterface = {
  news: [],
  randomNewsPost: null,
};

export const newsStore: Module<NewsStateInterface, RootStateInterface> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
