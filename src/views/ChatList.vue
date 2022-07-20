<template>
  <div class="chat-list">
    <v-chat-user />
  </div>
</template>


<script>
import VChatUser from "@/components/users/chat/VChatUser.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { VChatUser },
  name: "chat-list",
  computed: {},
  props: {},
  data: () => ({}),
  methods: {
    ...mapActions([
			"GET_CHATS", 
		]),
  },
  mounted() {
    this.GET_CHATS();
  },
};
</script>


<style>
</style>