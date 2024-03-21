import { createStore } from "vuex"
import $http from "../api";

const store = createStore({
    state: {
        chars: [],
        char: {},
    },
    mutations: {
        SEARCH_CHARS(state, payload) {
            state.chars = payload;
        },
        SET_CHAR_DETAILS(state, payload) {
            state.char = payload;
        },
    },
    actions: {
        async searchChars({ commit }, { name, view, status, gender }) {
            try {
                const { data } = await $http.get(`/character/?name=${name}&status=${view}&species=${status}&gender=${gender}`);
                console.log(data.results);
                commit("SEARCH_CHARS", data.results);
                
                return { data, error: null };
            } catch (error) {
                console.error(error);
                const {
                    message,
                    response
                } = error;
                
                return { data: null, error: {  message, status: response.status }};
            }
        },
        async getCharDetails({ commit }, id) {
            try {
                const { data } = await $http.get(`/character/${id}`);
                
                const lastEpisodeNumber = data.episode.at(-1).split('/').at(-1);
                const lastEpisodeData = await $http.get(`/episode/${lastEpisodeNumber}`);

                const dimensionOfLocation = await $http.get(data.location.url)
                
                const newCharData = {
                    name: data.name,
                    lastEpisodeNumber,
                    lastLocation: data.location.name,
                    lastEpisodeName: lastEpisodeData.data.name,
                    lastEpisodeDate: lastEpisodeData.data.air_date,
                    dimension: dimensionOfLocation.data.dimension
                }
                
                commit("SET_CHAR_DETAILS", newCharData);

                return { data, error: null };
            } catch (error) {
                console.error(error);
                const {
                    message,
                    response
                } = error;
                
                return { data: null, error: {  message, status: response.status }};
            }
        },
    },
    getters: {
        getFindedChars: (state) => state.chars,
        getCharDetails: (state) => state.char,
    },
    modules: {
    }
});

export default store;