import Vue from 'vue'
import Vuex from 'vuex'
import todo from './stores/todo'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        todo
    }
})

export default store
