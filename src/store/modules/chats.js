import axios from 'axios'

export default {
	state: {
		chats: []
	},
	mutations: {
		SET_CHATS(state, chats) {
			state.chats = chats;
		}
	},
	actions: {
		async GET_CHATS({ commit }) {
			const chats = await axios('http://localhost:3000/chats', {
				method: "GET"
			})
			commit('SET_CHATS', chats.data);
		},
	},
	getters: {
	},
}