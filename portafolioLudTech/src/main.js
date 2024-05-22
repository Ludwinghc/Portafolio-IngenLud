// Importa los estilos principales que usará la app
import './assets/css/styles.css'

// funcion para crear instancias de la app vue
import { createApp } from 'vue'
// importacion de pinia para mejorar el estado global de la app
import { createPinia } from 'pinia'

// Importa la raiz de la app
import App from './inicio.vue'
// importacion del router que se exporta en el index.js
import router from './router'

// se crea una constante  que instancia la nueva app
const app = createApp(App)
// usa la nueva instancia de pinia
app.use(createPinia())
// usa el router del index.js
app.use(router)
// se enlaza con el id del div que aparece en el index.html
app.mount('#inicio')
