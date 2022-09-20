import { createStore } from 'vuex';

export default createStore({
    state: {
        token: '',
        username: '',
        itemInCart: 0,
    },
    getters: {},
    mutations: {
        setToken(state, newTokenValue) {
            state.token = newTokenValue;
        },
        setItemInCart(state, newNumber) {
            state.itemInCart = newNumber;
        },
        setUsername(state, newUsername) {
            state.username = newUsername;
        },
    },
    actions: {
        storeToken(context, nv) {
            context.commit('setToken', nv);
        },
        storeNumber(context, nv) {
            context.commit('setItemInCart', nv);
        },
        storeUsername(context, nv) {
            context.commit('setUsername', nv);
        },
    },
    modules: {},
});
