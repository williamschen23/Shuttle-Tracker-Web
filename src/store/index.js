import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isDarkMode: false,
        serverStatus: {
            routes: false,
            stops: false,
            buses: false
        }
    },
    mutations: {
        setDarkMode(state, darkModeOn) {
            state.isDarkMode = darkModeOn
        },
        setServerStatus(state, status) {
            if (status.routes !== undefined) {
                state.serverStatus.routes = status.routes
            }
            if (status.stops !== undefined) {
                state.serverStatus.stops = status.stops
            }
            if (status.buses !== undefined) {
                state.serverStatus.buses = status.buses
            }
        }
    },
    actions: {},
    modules: {}
})
