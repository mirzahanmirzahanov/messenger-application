<template>
  <div class="v-user-chat">
    <v-messages
      v-for="message in this.userChatData.chat"
      :key="message.id"
      :messages="messageоо"
    />
    <div class="input__field">
      <input
        class="v-user-chat__textfield"
        type="text"
        v-model="textValue"
        @click="sendMessage"
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
    userChatData: {}
  }),
  mounted() {
    this.CHATS.find((chat) => {
      if (chat.id == this.$route.query.id) {
        this.userChatData = chat;
      }
    });
  },
  methods: {
    sendMessage() {},
  },
}



</script>


<style>
</style>