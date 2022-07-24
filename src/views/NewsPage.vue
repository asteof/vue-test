<template>
  <div class="news">
    <div class="flex h-full w-full relative box-border p-6 gap-6">
      <div class="news-container bg-amber-100 bg-opacity-40 w-1/2 h-full rounded-3xl overflow-scroll">
        <NewsComponent
            v-for="newsPost in allNews"
            :key="newsPost.id"
            :id="newsPost.id"
            :title="newsPost.title"
            :user-id="newsPost.userId"
            :body="newsPost.body"
        />
      </div>

      <div class="news-container bg-fuchsia-100 bg-opacity-40 w-1/2 h-fit rounded-3xl">
        <button @click="getRandomNews" class="bg-black bg-opacity-80 text-white p-2 rounded-lg">Get new random post</button>

        <NewsComponent
            :key="randomNewsPost.id"
            :id="randomNewsPost.id"
            :title="randomNewsPost.title"
            :user-id="randomNewsPost.userId"
            :body="randomNewsPost.body"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { StoreModuleEnum } from '@/store/types';
import { NewsActionEnum } from '@/store/news/actions';
import { NewsInterface } from '@/store/news/types';
import { NewsGettersEnum } from '@/store/news/getters';
import NewsComponent from '@/components/NewsComponent.vue';

export default defineComponent({
  name: 'NewsPage',
  components: {
    NewsComponent,
  },

  async mounted() {
    await this.$store.dispatch(`${StoreModuleEnum.newsStore}/${NewsActionEnum.FETCH_NEWS}`);
    await this.$store.dispatch(`${StoreModuleEnum.newsStore}/${NewsActionEnum.FETCH_RANDOM_NEWS_POST}`);
  },
  computed: {
    allNews(): NewsInterface[] {
      return this.$store.getters[`${StoreModuleEnum.newsStore}/${NewsGettersEnum.getAllNews}`];
    },
    randomNewsPost(): NewsInterface {
      return this.$store.getters[`${StoreModuleEnum.newsStore}/${NewsGettersEnum.getRandomNewsPost}`];
    },
  },
  methods: {
    async getRandomNews() {
      await this.$store.dispatch(`${StoreModuleEnum.newsStore}/${NewsActionEnum.FETCH_RANDOM_NEWS_POST}`);
    },
  },
});
</script>

<style scoped lang="scss">

</style>
