import axios from 'axios'

export default {
	state: {
		contacts: [],
		currentUserChat: {}
	},
	mutations: {
		SET_CONTACTS(state, contacts) {
			state.contacts = contacts;
		},
		SET_USER_TO_HEADER(state, user) {
			if (user) {
				state.currentUserChat = user;
			} else[
				state.currentUserChat = ''
			]
		}
	},
	actions: {
		async GET_CONTACTS({ commit }) {
			const contacts = await axios('http://localhost:3000/contacts', {
				method: "GET"
			})
			commit('SET_CONTACTS', contacts.data);
		},
		GET_USER_TO_HEADER({ commit }, user) {
			commit('SET_USER_TO_HEADER', user);
		}
	},
	getters: {
		CONTACTS(state) {
			return state.contacts
		},
		CURRENT_USER(state) {
			return state.currentUserChat
		}
	},
}