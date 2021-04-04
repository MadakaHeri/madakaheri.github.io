<template>
  <v-container style="max-width: 960px">
    <section class="markdown" v-html="markdown"></section>
  </v-container>
</template>

<script>
import mainMd from './Sns/main.md'
import marked from 'marked'
export default {

  computed: {
    markdown(){
      return marked(mainMd)
    },
  },

}
</script>