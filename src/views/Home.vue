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

    <router-view/>

    <footer class="mt-10"></footer>
  </section>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    breadcrumbs(){
      let pathes = this.$route.path.split('/')
      let items = []
      let current = this.routes
      while (pathes.length) {
        const path = pathes[0]
        const item = current.find(o => o.path == path)
        if (item) {
          items.push(item)
          if (item.items) {
            current = item.items
          }
        }
        pathes.shift()
      }
      return items
    },
    routes(){
      return [
        {
          path: "",
          text: 'Home',
          disabled: false,
          to: '/',
          items: [
            // {
            //   path: "home",
            //   text: 'Home',
            //   disabled: false,
            //   to: '/',
            // },
            {
              path: "profile",
              text: 'プロフィール',
              disabled: false,
              to: '/profile',
            },
            {
              path: "posts",
              text: '開発ブログ',
              disabled: false,
              to: '/posts',
            },
            {
              path: "credits",
              text: 'このサイトについて',
              disabled: false,
              to: '/credits',
            },
            {
              path: "posts",
              text: '開発ブログ',
              disabled: false,
              to: '/posts',
            },
            {
              path: "sns",
              text: 'SNSを作りたい！',
              disabled: false,
              to: '/sns',
            },
          ],
        }
      ]
    },
  },

}
</script>