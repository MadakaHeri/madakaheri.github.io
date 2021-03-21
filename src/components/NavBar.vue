<template>
  <v-navigation-drawer
    app
    clipped
    v-model="frame_isShowDrawer"
  >
    <template v-slot:prepend>
      <v-card flat color="transparent">
        <v-card-actions>
          <v-list-item>
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
        </v-card-actions>
        <v-card-actions>
          <v-list-item>
            <v-list-item-content>
              <v-row>
                <v-col cols="6">
                  <v-btn
                    small
                    block
                    dark
                    color="#1da1f2"
                    href="https://twitter.com/MadakaHeri"
                    target="_blank"
                  >
                    <v-icon small>mdi-twitter</v-icon>
                    <span class="ml-2">Twitter</span>
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn
                    small
                    block
                    dark
                    color="#000"
                    href="https://github.com/MadakaHeri"
                    target="_blank"
                  >
                    <v-icon small>mdi-github</v-icon>
                    <span class="ml-2">GitHub</span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-card-actions>
        <v-card-text class="text-caption">
          性別：男 / 出身：大阪府 / 血液型：O型<br>
          大学卒業後に上京。28歳までDTMで主に小劇団の劇伴を請負いながら音楽活動をし、以降ランサーズでWeb系フリーランスを少々。
          33歳から元ランサーズのお客様の会社に就職。現在に至る。
        </v-card-text>
      </v-card>
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
        to="/posts"
      >
        <v-list-item-icon>
          <v-icon>mdi-book</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>開発ブログ</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    
    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <v-subheader>PROJECTS</v-subheader>
      <v-list-item
        link
        disabled
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
        disabled
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
        disabled
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

    <v-list
      dense
      nav
    >
      <v-subheader>CREDITS</v-subheader>
      <v-list-item
        link
        to="/credits"
      >
        <v-list-item-icon>
          <v-icon>mdi-decagram</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>このサイトについて</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <aside class="text-center pa-4">
        <v-btn small @click="frame_isDarkMode = !frame_isDarkMode">
          <v-icon small>mdi-brightness-6</v-icon>
        </v-btn>
      </aside>
      <footer class="text-center text--disabled pa-4">
        <small>
          Copyright &copy MadakaHeri
        </small>
      </footer>
    </template>
  </v-navigation-drawer>
</template>
