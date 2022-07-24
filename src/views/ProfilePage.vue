<template>
  <div class="profile">
    <div class="justify-center flex bg-green-300 bg-opacity-80 items-center h-full">
      <div class="text-4xl flex flex-col gap-6">
        Logged in as admin. Enjoy your day!
        <button @click="logout" class="bg-black bg-opacity-80 text-orange-400 p-2 rounded-lg">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { StoreModuleEnum } from '@/store/types';
import { AuthActionEnum } from '@/store/auth/types';
import { RoutesEnum } from '@/router/types';

export default defineComponent({
  name: 'ProfilePage',
  methods: {
    async logout() {
      await this.$store.dispatch(`${StoreModuleEnum.authStore}/${AuthActionEnum.LOGOUT_USER}`);
      await this.$router.push(RoutesEnum.Home);
    },
  },
});
</script>

<style scoped lang="scss">

</style>
