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
export default {

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
