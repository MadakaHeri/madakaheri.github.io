<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-container style="max-width: 1184px">
        <v-row>
          <h1 class="font-weight-bold text-subtitle-1">@MadakaHeri</h1>
          <v-spacer></v-spacer>
          <v-btn
            href="https://twitter.com/MadakaHeri"
            target="_blank"
            small
            outlined
          >
            <v-icon left>mdi-twitter</v-icon>
            連絡先
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({
      //
    }),
  }
</script>
