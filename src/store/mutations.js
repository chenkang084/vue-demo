import * as M from './mutation-types.js'


export default {
    [M.RECORD_ADDRESS](state, payload) {
        console.log(state)
    },
    [M.ADD_NUM](state, payload) {
        state.count += 1;
    },
    [M.SUBTRACT_NUM](state, payload) {
        state.count -= 1;
    }
}