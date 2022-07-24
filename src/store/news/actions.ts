import { ActionContext, ActionTree } from 'vuex';
import { RootStateInterface } from '@/store/types';
import { NewsInterface, NewsStateInterface } from '@/store/news/types';
import axios from 'axios';
import { NewsMutationEnum } from '@/store/news/mutations';

export enum NewsActionEnum {
  FETCH_NEWS = 'FETCH_NEWS',
  FETCH_RANDOM_NEWS_POST = 'FETCH_RANDOM_NEWS_POST',
}

interface Actions<S = NewsStateInterface, R = RootStateInterface> {
  [NewsActionEnum.FETCH_NEWS]({ commit }: ActionContext<S, R>): Promise<void>;
  [NewsActionEnum.FETCH_RANDOM_NEWS_POST]({ commit }: ActionContext<S, R>): Promise<void>;
}

export const actions: ActionTree<NewsStateInterface, RootStateInterface> & Actions = {
  [NewsActionEnum.FETCH_NEWS]: async ({ commit }) => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      commit(NewsMutationEnum.SET_NEWS, data as NewsInterface[]);
    } catch (err: unknown) {
      console.log(err);
    }
  },
  [NewsActionEnum.FETCH_RANDOM_NEWS_POST]: async ({ commit }) => {
    const randomNumber = Math.floor(Math.random() * 100);
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`);
      commit(NewsMutationEnum.SET_RANDOM_NEWS_POST, data as NewsInterface);
    } catch (err: unknown) {
      console.log(err);
    }
  },
};
