

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import naive from "naive-ui";

const app = createApp(App)

app.use(axios)
app.use(naive)
app.use(router)

app.mount('#app')
