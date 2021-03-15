import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.orange.base,
        secondary: colors.blueGrey.base,
        accent: colors.deepOrange.base,
        error: colors.pink.base,
        warning: colors.amber.base,
        info: colors.lightBlue.base,
        success: colors.teal.base
      },
      dark: {
        primary: colors.orange.base,
        secondary: colors.blueGrey.base,
        accent: colors.deepOrange.base,
        error: colors.pink.base,
        warning: colors.amber.base,
        info: colors.lightBlue.base,
        success: colors.teal.base
      },
    },
  },
});
