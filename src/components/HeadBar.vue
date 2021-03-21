<template>
  <v-app-bar
    app
    clipped-left
    color="primary"
    dark
  >
    <v-app-bar-nav-icon @click.stop="frame_isShowDrawer = !frame_isShowDrawer"/>

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
</template>
