import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import data from '../data/data.json'

export default new Vuex.Store({
  state: {
    meetUpList: data
  },
  mutations: {},
  actions: {},
  modules: {}
});
