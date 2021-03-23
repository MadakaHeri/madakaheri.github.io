<template>
  <v-container>
    <v-row class="mt-8">
      <v-col class="text-center mb-4">
        <h1 class="display-1 font-weight-bold mb-3">
          マダカヘリの遊び場
        </h1>

        <p class="subheading font-weight-regular">
          このサイトは作りかけです。
        </p>
        <v-avatar
          color="primary"
          size="128"
        >
          <v-img
            :src="require('../assets/avator.png')"
            class="my-3"
            contain
            height="200"
          />
        </v-avatar>
      </v-col>

      <!-- <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col> -->

      <!-- <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col> -->

      <!-- <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col> -->

    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card>
          <v-card-text v-show="isLoading">
            <div class="d-flex align-center justify-center" style="width: 400px;height: 400px;">
              <aside class="text-center" style="width: 200px">
                <div>
                  <v-icon x-large color="#1da1f2">mdi-twitter</v-icon>
                </div>
                <div class="mt-6">
                  <v-progress-linear
                    color="#1da1f2"
                    indeterminate
                    rounded
                    height="6"
                  ></v-progress-linear>
                </div>
              </aside>
            </div>
          </v-card-text>
          <v-card-text v-show="!isLoading">
            <a class="twitter-timeline" data-lang="ja" data-width="400" data-theme="dark" href="https://twitter.com/MadakaHeri?ref_src=twsrc%5Etfw">Tweets by MadakaHeri</a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  async mounted(){
    this.isLoading = true
    const { data } = await axios.get('https://platform.twitter.com/widgets.js')
    const widgetScript = Function(data)
    widgetScript()
    await new Promise(r => setTimeout(r, 800))
    this.isLoading = false
  },
  data: () => ({
    isLoading: true,
  }),
}
</script>
