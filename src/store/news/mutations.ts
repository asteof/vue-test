import { MutationTree } from 'vuex';
import { NewsInterface, NewsStateInterface } from '@/store/news/types';

export enum NewsMutationEnum {
  SET_NEWS = 'SET_NEWS',
  SET_RANDOM_NEWS_POST = 'SET_RANDOM_NEWS_POST',
}

interface Mutations<S = NewsStateInterface> {
  [NewsMutationEnum.SET_NEWS](state: S, news: NewsInterface[]): void;
  [NewsMutationEnum.SET_RANDOM_NEWS_POST](state: S, payload: NewsInterface): void;
}

export const mutations: MutationTree<NewsStateInterface> & Mutations = {
  [NewsMutationEnum.SET_NEWS]: (state, news) => {
    state.news = news;
  },
  [NewsMutationEnum.SET_RANDOM_NEWS_POST]: (state, randomNew) => {
    state.randomNewsPost = randomNew;
  },
};
