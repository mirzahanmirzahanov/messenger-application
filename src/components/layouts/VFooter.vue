<template>
  <div class="v-bottom-nav">
		<router-link to="/">
			<i class="material-icons">person_pin</i>
		</router-link>
		<router-link to="/chats">
			<i class="material-icons">chat</i>
		</router-link>
		<router-link to="/">
			<i class="material-icons">settings</i>
		</router-link>
		<router-link to="/">
			<i class="material-icons">call</i>
		</router-link>
		<router-link to="/">
			<i class="material-icons">home</i>
		</router-link>
	</div>
</template>


<script>
export default {
  components: {},
  name: "v-footer",
  props: {},
  data: () => ({}),
  computed: {},
};
</script>


<style>
</style>
