import Vue from 'vue'
import Vuex from 'vuex'

import todoApp from './modules/todoApp'

// import * as getters from './getters'
// import * as mutations from './mutations'

Vue.use(Vuex)


console.log("todoApp", todoApp);



export const store = new Vuex.Store({
  modules: {
    todoApp
  }
})
