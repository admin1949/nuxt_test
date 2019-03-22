
export const state = () => ({
    sum: 0
})

export const mutations = {
    add(state) {
        state.sum ++
    },
    sub(state) {
        state.sum --
    }
}

export const actions = {
    sub(store, {num}){
        console.log(num)
        state.commit('sub')
    }
}