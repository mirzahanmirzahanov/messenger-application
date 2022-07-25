<template>
  <div class="v-header">
    <div 
			@click="goBack"
			v-if="!isCoreRoute"
			class="v-header__back" 
		>
      <i class="material-icons">keyboard_arrow_left</i>
      <span>Back</span>
    </div>
    <div 
			v-if="!isCoreRoute"
			class="v-header__user-info"
		>
      <span>{{ CURRENT_USER }}</span>
    </div>
    <div class="right-side"></div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  components: {},
  name: "v-header",
  props: {},
  data: () => ({}),
  computed: {
		...mapGetters(["CURRENT_USER"]),
		isCoreRoute() {
			return this.$route.path === '/'
		}
	},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>


<style>
</style>