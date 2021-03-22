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
        <v-col>
          
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { DataStore } from '@aws-amplify/datastore';
import { Post } from '@/models';
export default {

  async created(){
    const models = await DataStore.query(Post);
    console.log(models);
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

}
</script>
