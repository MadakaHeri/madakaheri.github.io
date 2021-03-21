<template>
  <v-app>
    <v-navigation-drawer
      app
      clipped
      v-model="drawer"
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="@/assets/avator.png">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              @MadakaHeri
            </v-list-item-title>
            <!-- <v-list-item-subtitle>
              <v-icon small>mdi-map-marker</v-icon>
              東京都
              墨田区
            </v-list-item-subtitle> -->
          </v-list-item-content>
        </v-list-item>
        
        <!-- <v-list-item link dense>
          <v-list-item-icon>
            <v-icon>mdi-github</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>github</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link dense>
          <v-list-item-icon>
            <v-icon>mdi-twitter</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>twitter</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

        <v-list-item>
          <v-list-item-content>
            <v-btn
              small
              block
              dark
              color="#000"
              href="https://github.com/MadakaHeri"
              target="_blank"
            >
              <v-icon>mdi-github</v-icon>
              <span class="ml-2">GitHub</span>
            </v-btn>
            <!-- <v-btn
              class="mt-2"
              small
              block
              dark
              color="#55C500"
              href="https://qiita.com/MadakaHeri"
              target="_blank"
            >
              <v-icon>mdi-file-document-edit</v-icon>
              <span class="ml-2">Qiita</span>
            </v-btn> -->
            <v-btn
              class="mt-2"
              small
              block
              dark
              color="#1da1f2"
              href="https://twitter.com/MadakaHeri"
              target="_blank"
            >
              <v-icon>mdi-twitter</v-icon>
              <span class="ml-2">Twitter</span>
            </v-btn>
            <!-- <v-btn
              class="mt-2"
              small
              block
              dark
              color="#F00"
              href="https://www.youtube.com/channel/UCdYdqeVNy9D1ZDWrE6Z6uMA"
              target="_blank"
            >
              <v-icon>mdi-youtube</v-icon>
              <span class="ml-2">YouTube</span>
            </v-btn> -->
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </template>
      <v-list
        dense
        nav
      >
        <v-subheader>CONTENTS</v-subheader>
        <v-list-item
          link
          to="/"
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="/blog"
        >
          <v-list-item-icon>
            <v-icon>mdi-book</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>開発ブログ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="/youtube"
        >
          <v-list-item-icon>
            <v-icon>mdi-youtube</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>VTuberになりたい！</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="/sns"
        >
          <v-list-item-icon>
            <v-icon>mdi-link-box</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>SNSを作りたい！</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="/skyboard"
        >
          <v-list-item-icon>
            <v-icon>mdi-airplane-takeoff</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>飛行機を作りたい！</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <aside class="text-center pa-4">
          <v-btn small @click="isDarkMode = !isDarkMode">
            <v-icon small>mdi-brightness-6</v-icon>
          </v-btn>
        </aside>
        <footer class="text-center pa-4">
          <small>
            Copyright &copy MadakaHeri
          </small>
        </footer>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>

      <v-toolbar-title
        class="font-weight-bold"
      >
        <router-link to="/" style="
          text-decoration: none;
          color: white;"
        >
          MadakaHeri
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn
        small
        outlined
        dark
        href="https://twitter.com/MadakaHeri"
        target="_blank"
      >
        <v-icon small>mdi-twitter</v-icon>
        <span class="ml-2">連絡先</span>
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

  created(){
    this.isDarkMode = JSON.parse(localStorage.getItem('isDarkMode')) || false
  },

  data: () => ({
    drawer: true,
  }),
  computed: {
    isDarkMode: {
      get(){
        return this.$vuetify.theme.dark
      },
      set(val){
        this.$vuetify.theme.dark = val
        localStorage.setItem('isDarkMode', JSON.stringify(val))
      },
    },
  },
};
</script>
