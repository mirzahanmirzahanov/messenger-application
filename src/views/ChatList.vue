<template>
  <div class="chat-list">
		<v-user
			v-for="chat in CHATS"
			:key="chat.id"
			:user_data="chat"
		/>
			
		
  </div>
</template>


<script>
import VUser from '@/components/users/VUser.vue'
import { mapActions, mapGetters } from "vuex";

export default {
  components: { VUser },
  name: "chat-list",
  computed: {
		...mapGetters([
			"CHATS"
		])
	},
  props: {},
  data: () => ({}),
  methods: {
    ...mapActions([
			"GET_CHATS", 
			"GET_USER_TO_HEADER"
		]),
  },
  mounted() {
    this.GET_CHATS();
    this.GET_USER_TO_HEADER();
  },
};
</script>


<style>
</style>