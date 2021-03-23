<template>
  <section>
    <v-toolbar
      dense
      flat
      color="transparent"
    >
      <v-breadcrumbs
        :items="breadcrumbs"
        divider="/"
      ></v-breadcrumbs>
    </v-toolbar>
    <v-container>
      <v-row>
        <v-col></v-col>
        <v-col>
          <v-text-field
            solo
            rounded
            label="検索"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
        <v-col></v-col>
      </v-row>
      <v-row
      v-for="post in posts"
      :key="post.id">
        <v-col>
          <v-card>
            <v-card-actions>
              <v-chip small>
                TYPE: {{ post.PostType }}
              </v-chip> 
              <v-chip small class="ml-2">
                CONTENT: {{ post.PostContentType }}
              </v-chip>
              <v-spacer></v-spacer>
              <time
              class="text-caption text--disabled"
              :datetime="post.createdAt">
                {{ post.createdAt | fromNow }}
              </time>
              <v-btn small fab text class="ml-4" color="#1da1f2">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </v-card-actions>
            <v-divider></v-divider>
            <v-card-text v-html="getHtmlbyMarkdown(post.data)">
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <small class="text--disabled">
                {{ post.id }}
              </small>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { DataStore } from '@aws-amplify/datastore';
import { Post } from '@/models';
import marked from 'marked'
export default {
  filters: {
    fromNow(val){
      return moment(val).locale('ja').fromNow()
    },
  },
  async created(){
    const posts = await DataStore.query(Post);
    this.posts.push(...posts)
  },
  
  data: () => ({
    posts: [],
  }),
  computed: {
    breadcrumbs(){
      return [
        {
          text: 'Home',
          disabled: false,
          to: '/',
        },
        {
          text: '開発ブログ',
          disabled: false,
          to: '/posts',
        },
      ]
    },
  },
  methods: {
    getHtmlbyMarkdown(text){
      return marked(text)
    },
  },

}
</script>
