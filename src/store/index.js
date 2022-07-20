import axios from 'axios'

import { createStore } from 'vuex'
import  contacts  from "./modules/contacts";
import  chats  from "./modules/chats";


export default createStore({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // getters: {
  // },
  modules: {
    contacts,
    chats
  }
})
