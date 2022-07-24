import { GetterTree } from 'vuex';
import { RootStateInterface } from '@/store/types';
import { NewsInterface, NewsStateInterface } from '@/store/news/types';

export enum NewsGettersEnum {
  getAllNews = 'getAllNews',
  getRandomNewsPost = 'getRandomNewsPost',
}

interface Getters<S = NewsStateInterface> {
  [NewsGettersEnum.getAllNews](state: S): NewsInterface[];
  [NewsGettersEnum.getRandomNewsPost](state: S): NewsInterface | null;
}

export const getters: GetterTree<NewsStateInterface, RootStateInterface> & Getters = {
  getAllNews(state) {
    return state.news;
  },
  getRandomNewsPost(state) {
    return state.randomNewsPost;
  },
};
