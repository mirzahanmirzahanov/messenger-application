import { createRouter, createWebHistory } from 'vue-router'

import ContactList from '@/views/ContactList.vue'
import VContactUserInfo from '@/components/contacts/VContactUserInfo.vue'

import ChatList from '@/views/ChatList.vue'
import VUserChat from '@/components/users/chat/VUserChat.vue'

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
  {
    path: '/chat',
    name: 'chat',
    component: VUserChat
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
