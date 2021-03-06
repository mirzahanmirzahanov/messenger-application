import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-design-icons-iconfont'
import './assets/styles/scss/styles.scss'

createApp(App).use(store).use(router).mount('#app')
