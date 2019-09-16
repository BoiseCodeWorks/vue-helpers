import Vue from 'vue'
import Vuex from 'vuex'
import NotificationService from "./NotificationService"
import axios from "axios"

let _api = axios.create({
  baseURL: "https://api.boisecodeworks.com"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {

    }
  },
  mutations: {
    setData(state, data) {
      state.data = data
    }
  },
  actions: {
    async getData({ commit, dispatch }, payload) {
      try {
        let res = await _api.get("bananas")
        commit('setData', res.data)
      } catch (e) {
        NotificationService.toastError(e)
      }
    }
  }
})
