<style lang="scss">
@import '@/styles/style.scss'
</style>

<template>
  <v-app>
    <NavBar></NavBar>
    <HeadBar></HeadBar>
    <v-main>

      <router-view/>

    </v-main>
  </v-app>
</template>

<script>
import HeadBar from '@/components/HeadBar'
import NavBar from '@/components/NavBar'
export default {
  name: 'App',

  components: {
    HeadBar,
    NavBar,
  },
};
</script>
