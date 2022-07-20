<template>
  <div class="v-user">
    <div class="v-user__avatar"></div>
    <div class="v-user__info">
      <p class="v-user__name">
        {{ user_data.name }}
      </p>
			<!-- в квадратных скобках способ 
			получить последний элемент в массиве -->
			<p class="v-user__last-message">
				{{user_data.chat[user_data.chat.length-1].text}}
			</p>
    </div>
    <div class="v-user__time">
				{{user_data.chat[user_data.chat.length-1].time}}
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
  methods: {},
};
</script>


<style>
</style>