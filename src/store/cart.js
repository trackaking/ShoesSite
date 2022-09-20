import { ShoppingCartModule } from 'vuex';

// eslint-disable-next-line no-import-assign,no-unused-vars
export default ShoppingCartModule = {
    state: {
        cartKeys: [],
        cartItems: [],
    },
    mutations: {
        cartKeys(state, keys) {
            state.cartKeys = keys;
        },
        additem(state, newItem) {
            state.cartItems.push(newItem);
        },
    },
};
