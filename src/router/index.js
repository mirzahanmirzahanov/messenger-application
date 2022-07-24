import { createRouter, createWebHistory } from 'vue-router'

import ContactList from '@/views/ContactList.vue'
import VContactUserInfo from '@/components/contacts/VContactUserInfo.vue'

import ChatList from '@/views/ChatList.vue'
import VUserChat from '@/components/users/chat/VUserChat.vue'

const routes = [
  {
    path: '/',
    name: 'contacts',
    component: ContactList,
    props: true
  },
  {
    path: '/contact',
    name: 'contact',
    component: VContactUserInfo,
    props: true
  },
  {
    path: '/chats',
    name: 'chatList',
    component: ChatList,
    props: true
  },
  {
    path: '/chat',
    name: 'chat',
    component: VUserChat,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


