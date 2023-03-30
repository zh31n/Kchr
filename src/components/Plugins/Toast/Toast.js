import Vue from 'vue'
import Toast, {POSITION} from 'vue-toastification'

import 'vue-toastification/dist/index.css'

const options = {
  position: POSITION.TOP_RIGHT,
  timeout: 2000,
  maxToasts: 3,
  closeOnClick: true
}

Vue.use(Toast, options)
