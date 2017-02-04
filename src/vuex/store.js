import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const userStore = new Vuex.Store({
    state: {
        allData: {},
        gameData: {},
        userInfo: {},
        lastAward: {},
        ispop: false,
        award: {},
        skate: []
    },
    getters: {

    },
    mutations: {
        setAllData (state, allData) {
            state.allData = allData;
        },
        setGameData (state, gameData) {
            state.gameData = gameData;
        },
        setUserInfo (state, userInfo) {
            state.userInfo = userInfo
        },
        setLastAward (state, lastAward) {
            state.lastAward = lastAward
        },
        setPop (state, pop) {
            state.ispop = pop
        },
        setAward (state, award) {
            state.award = award
        },
        addPress (state, index){
            state.userInfo.pressInjectData[index].myNum++
        }
    },
    actions: {
        setAllData ({ commit }, allData) {
            commit('setAllData', allData)
        },
        setGameData ({ commit }, gameData) {
            commit('setGameData', gameData)
        },
        setUserInfo ({ commit }, userInfo) {
            commit('setUserInfo', userInfo)
        },
        setLastAward ({ commit }, lastAward) {
            commit('setLastAward', lastAward)
        },
        setPop ({ commit }, pop) {
            commit('setPop', pop)
        },
        setAward ({ commit }, award) {
            commit('setAward', award)
        },
        addPress ({ commit }, index) {
            commit('addPress', index)
        }
    }
});

export default userStore;