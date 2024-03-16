import $http from "../api";

const SEARCH_CHARS = "SEARCH_CHARS";

export default {
    namespaced: true,
    state: {
        chars: []
    },
    mutations: {
        [SEARCH_CHARS](state, payload) {
            state.chars = payload
        },
    },
    actions: {
        async searchChars({ commit }, params) {
            try {
                const { data } = await $http.get(`/character/?name=${params.name}&status=${params.view}&species=${params.status}&gender=${params.gender}`);

                commit(SEARCH_CHARS, data);

                return { data, error: null };
            } catch (error) {
                const {
                    data: { message },
                    status,
                } = error.response;

                return { data: null, error: {message, status} };
            }
        }
    },
    getters: {
        findedChars(state) {
            return state
        }
    }
}