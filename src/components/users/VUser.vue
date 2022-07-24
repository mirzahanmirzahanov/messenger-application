<template>
  <div class="v-user" @click="toUserChat">
    <div class="v-user__avatar"></div>
    <div class="v-user__info">
      <p class="v-user__name">
        {{ user_data.name }}
      </p>
      <!-- в квадратных скобках способ 
			получить последний элемент в массиве -->
      <p class="v-user__last-message">
        {{ user_data.chat[user_data.chat.length - 1].text }}
      </p>
    </div>
    <div 
      class="v-user__time"
      @click="info"
      >
      {{ user_data.chat[user_data.chat.length - 1].time }}g
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  name: "v-user",
  computed: {},
  props: {
    user_data: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  data: () => ({}),
  methods: {
    // toUserChat() {
    //   this.$router.push({
    //     name: 'chat',
    //     // params: {'messages': this.user_data.chat, 'user': this.user_data}
    //     params: { 'user': this.user_data }
    //   })
    // },
    info() {
      console.log(this.user_data);
    }
  },
};
</script>


<style>
</style>