import axios from 'axios'

export default {
	state: {
		contacts: []
	},
	mutations: {
		SET_CONTACTS(state, contacts) {
			state.contacts = contacts;
		}
	},
	actions: {
		async GET_CONTACTS({ commit }) {
			const contacts = await axios('http://localhost:3000/contacts', {
				method: "GET"
			})
			commit('SET_CONTACTS', contacts.data);
		}
	},
	getters: {
		CONTACTS(state) {
			return state.contacts
		}
	},
}