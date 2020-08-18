import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const storage = {
  fetch() {

    let arr = []

    if(localStorage.length > 0){
      for (let i=0; i<localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          let newItem = JSON.parse(localStorage.getItem(localStorage.key(i)))
          arr = [...arr, newItem];
        } 
      }
    }    
    return arr

  }
}


export const store = new Vuex.Store({

  state: {
    todoItems: storage.fetch()
  }

})
