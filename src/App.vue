<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>MadakaHeri</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/MadakaHeri"
        target="_blank"
        text
      >
        <v-icon>mdi-github</v-icon>
        <span class="ml-2">github</span>
      </v-btn>

      <v-btn
        href="https://twitter.com/MadakaHeri"
        target="_blank"
        text
      >
        <v-icon>mdi-twitter</v-icon>
        <span class="ml-2">twitter</span>
      </v-btn>
      
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
