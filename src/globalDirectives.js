import {directive} from 'vue-clickaway'

const GlobalDirectives = {
  install (Vue) {
    Vue.directive('click-outside', directive)
  }
}

export default GlobalDirectives
