<template>
  <div class="v-user-chat">
    <v-messages
      v-for="message in this.messagesData"
      :key="message.id"
      :messages="message"
    />
    <div class="input__field">
      <input
        class="v-user-chat__textfield"
        type="text"
        v-model="textValue"
        @keypress.enter="sendMessage"
      />
			<div 
				class="material-icons"
				@click="sendMessage"
			>
				send
			</div>
    </div>
  </div>
</template>


<script>
import VMessages from "./VMessages.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  components: { VMessages },
  name: "v-user-chat",
  computed: {
    ...mapGetters(["CHATS"]),
  },
  props: {},
  data: () => ({
    textValue: "",
    userData: [],
    messagesData: []
  }),
  mounted() {
    this.CHATS.find((user) => {
      if (user.id == this.$route.query.id) {
        this.userData = user;
        this.messagesData = user.chat
      }
    });
  },
  methods: {
    // создание нового сообщения
    sendMessage() {
      let user = {...this.userData};
      let chat = {
        id: this.messagesData.length + 1,
        time: new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: 'numeric',
          minute: 'numeric',
        }),
        text: this.textValue,
        type: 'own'
      };
      user.chat.push(chat)
      console.log(chat);
    },
  },
}



</script>


<style>
</style>