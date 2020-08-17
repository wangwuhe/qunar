import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state={
    city:"上海"
}
const mutations={
    changeCity(state,name){
        state.city=name;
    }
}

export default new Vuex.Store({
    state,
    mutations
})