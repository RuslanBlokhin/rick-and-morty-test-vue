import { createStore } from "vuex"
import $http from "../api";
// import chars from "./chars"

const store = createStore({
    state: {
        chars: []
    },
    mutations: {
        SEARCH_CHARS(state, payload) {
            state.chars = payload;
            console.log(payload);
        },
    },
    actions: {
        async searchChars({ state, commit }, { name, view, status, gender }) {
            try {
                const { data } = await $http.get(`/character/?name=${name}&status=${view}&species=${status}&gender=${gender}`);
                
                commit("SEARCH_CHARS", data.results);
                
                // return { data, error: null };
            } catch (error) {
                console.error(error);
                const {
                    data: { message },
                    status,
                } = error.response;
                
                // return { data: null, error: {message, status} };
            }
        }
    },
    getters: {
        getFindedChars: (state) => state.chars
    },
    modules: {
        // chars
    }
});

export default store;