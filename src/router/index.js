import { createRouter, createWebHistory } from 'vue-router'

import ContactList from '@/views/ContactList.vue'
import VContactUserInfo from '@/components/contacts/VContactUserInfo.vue'
import ChatList from '@/views/ChatList.vue'

const routes = [
  {
    path: '/',
    name: 'contacts',
    component: ContactList
  },
  {
    path: '/contact',
    name: 'contact',
    component: VContactUserInfo
  },
  {
    path: '/chats',
    name: 'chatList',
    component: ChatList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
