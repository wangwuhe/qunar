import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state={
    city:localStorage.city||'北京'
}
const mutations={
    changeCity(state,name){
        state.city=name;
        localStorage.city=name;
    }
}

export default new Vuex.Store({
    state,
    mutations
})