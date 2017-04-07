export default {
    test({ commit, state }, id) {
        console.log(commit);

        commit('RECORD_ADDRESS')
    },
    addNum({ commit, state }) {
        commit('ADD_NUM')
    },
    subtract({ commit, state }) {
        commit('SUBTRACT_NUM')
    }


}