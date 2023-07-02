import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)

//add Vuetify

const customLightTheme = {
  dark: false,
  colors: {
    background: '#eee',
    surface: '#15202b',
    primary: '#3f51b5',
    secondary: '#00ccff',
    error: '#ffcc00'
  }
}

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      customLightTheme
    }
  }
})

app.use(router)
app.use(vuetify)

app.mount('#app')
