<template>
  <div class="v-user-chat">
    <v-messages />
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

export default {
  components: { VMessages },
  name: "v-user-chat",
  computed: {},
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
    user: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    textValue: "",
  }),
  methods: {
    sendMessage() {},
  },
};
</script>


<style>
</style>