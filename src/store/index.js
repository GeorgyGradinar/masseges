import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            messages: []
        }
    },
    mutations: {
        updateStoreMessages(state, payload) {
           const newMessage = {
                name: payload.name,
                message: payload.message
            };
            state.messages.push(newMessage);
        }
    }
})

export default store;

